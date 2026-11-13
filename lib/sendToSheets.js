const { GoogleSpreadsheet } = require('google-spreadsheet');

const ensureTaskColumn = async (sheet) => {
  if (!sheet.headerValues) await sheet.loadHeaderRow();
  if (sheet.headerValues && !sheet.headerValues.includes('Task')) {
    if (sheet.columnCount < sheet.headerValues.length + 1) {
      await sheet.resize({ rowCount: sheet.rowCount, columnCount: sheet.headerValues.length + 1 });
    }
    await sheet.setHeaderRow([...sheet.headerValues, 'Task']);
  }
};

const saveLead = async (data = {}) => {
  const email = String(data.Email || '').trim();
  const tariff = String(data.Tariff || '').trim();

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    const error = new Error('Valid Email is required');
    error.statusCode = 400;
    throw error;
  }
  if (!tariff) {
    const error = new Error('Tariff is required');
    error.statusCode = 400;
    throw error;
  }

  const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
  await doc.useServiceAccountAuth({
    private_key: (process.env.PRIVATE_KEY || '').replace(/\\n/gm, '\n'),
    client_email: process.env.CLIENT_EMAIL,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  try {
    await ensureTaskColumn(sheet);
  } catch (e) {
    console.error('Could not ensure Task column:', e);
  }

  const row = {
    Name: data.Name || '—',
    Email: email,
    Telegram: data.Telegram || '—',
    Date: data.Date || new Date().toLocaleString('ru-RU'),
    Tariff: tariff,
    Gift: data.Gift || '—',
    License: data.License || false,
    Task: data.Task || '—',
  };

  const rows = await sheet.getRows();
  const matchingRow = rows.find((item) => item.Email === email);

  if (!matchingRow) {
    await sheet.addRow(row);
    return { statusCode: 200, message: `New row added: ${email}` };
  }

  matchingRow.Name = row.Name;
  matchingRow.Tariff = row.Tariff;
  matchingRow.Telegram = row.Telegram;
  matchingRow.Gift = row.Gift;
  matchingRow.Date = row.Date;
  matchingRow.Task = row.Task;
  await matchingRow.save();
  return { statusCode: 200, message: `Updated: ${email}` };
};

module.exports = { saveLead };
