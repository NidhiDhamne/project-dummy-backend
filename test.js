const finnhub = require('finnhub');

const finnhubClient = new finnhub.DefaultApi("< d26a4spr01qh25lmj2bgd26a4spr01qh25lmj2c0>") 
finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
});