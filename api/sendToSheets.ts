import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function POST(request: Request) {
  try {
    // Разбираем тело запроса
    const data = await request.json();
    const email = data.Email;
    const tariff = data.Tariff;
    const telegram = data.Telegram;
    const gift = data.Gift;

    // Инициализация Google Sheet и авторизация
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID as string);
    await doc.useServiceAccountAuth({
      private_key: (process.env.PRIVATE_KEY as string).replace(/\\n/gm, '\n'),
      client_email: process.env.CLIENT_EMAIL as string,
    });
    console.log('Logged In');

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Поиск строки по Email
    const rows = await sheet.getRows();
    const matchingRow = rows.find((row: any) => row.Email === email);

    if (!matchingRow) {
      // Нет строки с таким email — добавляем всю data
      const newData = { ...data };
      await sheet.addRow(newData);
      console.log(`New row added with email: ${email}`);
      return new Response(
        JSON.stringify({ message: `New row added with email: ${email}` }),
        { status: 200 }
      );
    } else {
      // Есть строка — обновляем нужные поля
      matchingRow.Email = email;
      matchingRow.Tariff = tariff;
      matchingRow.Telegram = telegram;
      matchingRow.Gift = gift;
      await matchingRow.save();
      console.log(`Email and tariff updated for email: ${email}`);
      return new Response(
        JSON.stringify({
          message: `Email and tariff updated for email: ${email}`,
        }),
        { status: 200 }
      );
    }
  } catch (e: any) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: 'Error updating sheet',
        error: e.toString(),
      }),
      { status: 500 }
    );
  }
}
