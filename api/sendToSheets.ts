import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // req.body уже спарсен как JSON в Vercel
    const data = req.body || {};
    console.log('Request body:', data); // Лог для отладки
    const { Name: name, Email: email, Tariff: tariff, Telegram: telegram, Gift: gift, Date: date, Task: task } = data;

    if (!email) {
      return res.status(400).json({ error: 'Email required' });
    }

    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    await doc.useServiceAccountAuth({
      private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
      client_email: process.env.CLIENT_EMAIL,
    });
    console.log('Logged In');

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    try {
      if (!sheet.headerValues) await sheet.loadHeaderRow();
      if (sheet.headerValues && !sheet.headerValues.includes('Task')) {
        if (sheet.columnCount < sheet.headerValues.length + 1) {
          await sheet.resize({ rowCount: sheet.rowCount, columnCount: sheet.headerValues.length + 1 });
        }
        await sheet.setHeaderRow([...sheet.headerValues, 'Task']);
      }
    } catch (e) {
      console.error('Could not ensure Task column:', e);
    }
    const rows = await sheet.getRows();
    const matchingRow = rows.find((row) => row.Email === email);

    if (!matchingRow) {
      await sheet.addRow({ Name: name, Email: email, Tariff: tariff, Telegram: telegram, Gift: gift, Date: date, Task: task });
      console.log(`New row added: ${email}`);
      return res.status(200).json({ message: `New row added: ${email}` });
    } else {
      matchingRow.Name = name;
      matchingRow.Tariff = tariff;
      matchingRow.Telegram = telegram;
      matchingRow.Gift = gift;
      matchingRow.Date = date;
      matchingRow.Task = task;
      await matchingRow.save();
      console.log(`Updated: ${email}`);
      return res.status(200).json({ message: `Updated: ${email}` });
    }
  } catch (e) {
    console.error('Error:', e);
    return res.status(500).json({
      message: 'Error updating sheet',
      error: e.toString(),
    });
  }
}
