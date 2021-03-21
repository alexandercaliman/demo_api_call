const http = require('http');
const url = require('url');
const axios = require('axios');


const getRates = async (date) => {
  try {
    return await axios.get(`https://api.exchangeratesapi.io/${date}`)
  } catch (error) {
    console.error(error)
  }
}

const requestListener = async function (req, res) {
  const queryObject = url.parse(req.url, true).query;
  if (queryObject.date) {  
    const rates = await getRates(queryObject.date)
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    res.write(JSON.stringify(rates.data.rates));
    res.end();
  }
  else {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.end("Bad request");
  }
}

const server = http.createServer(requestListener);


server.listen(8080, function () {
  console.log("Listening on port 8080");
});