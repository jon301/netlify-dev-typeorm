var typeorm = require('typeorm');

typeorm.createConnection({
  type: 'sqlite',
  database: `${__dirname}/db.sqlite`
});

exports.handler = async (event, context) => {
  try {
    console.log('Update this log message !');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World ${Math.random()}` })
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
