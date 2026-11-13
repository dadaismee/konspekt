const { saveLead } = require('../lib/sendToSheets');

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body || '{}');
    const result = await saveLead(data);
    return {
      statusCode: result.statusCode,
      body: JSON.stringify({ message: result.message }),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        message: e.statusCode === 400 ? e.message : 'Error updating sheet',
        error: e.toString(),
      }),
    };
  }
};
