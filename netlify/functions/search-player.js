exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body)

    console.log('Searching player:', body)

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: false,
        players: [],
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
      }),
    }
  }
}
