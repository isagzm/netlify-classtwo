// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const number1 = parseInt(event.queryStringParameters.number1);
    const number2 = parseInt(event.queryStringParameters.number2);
    const result = number1 + number2;
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result}` }),
      
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
