const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
  try {
    // Load Google Sheet and authenticate
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    await doc.useServiceAccountAuth({
      private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
      client_email: process.env.CLIENT_EMAIL,
    });
    console.log('Logged In');

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Parse data from the request
    const data = JSON.parse(event.body);
    const email = data.Email;
    const tariff = data.Tariff; // Assuming "tariff" exists in the request
    const stream = data.Stream;

    // Find the row with matching email
    const rows = await sheet.getRows();
    const matchingRow = rows.find((row) => row.Email === email);

    // Update or add data
    if (!matchingRow) {
      // No matching email, send all data (including name if available)
      const newData = { ...data }; // Make a copy
      await sheet.addRow(newData);
      console.log(`New row added with email: ${email}`);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `New row added with email: ${email}`,
        }),
      };
    } else {
      // Matching email found, only send email and tariff
      matchingRow.Email = email;
      matchingRow.Tariff = tariff;
      matchingRow.Stream = stream;
      await matchingRow.save();
      console.log(`Email and tariff updated for email: ${email}`);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `Email and tariff updated for email: ${email}`,
        }),
      };
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error updating sheet',
        error: e.toString(),
      }),
    };
  }
};

