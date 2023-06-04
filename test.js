const axios = require('axios');

axios.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY')
  .then(response => {
    // The JSON data will be available in the `response.data` property
    const jsonData = response.data;
    getOptionValues(jsonData, 18750, "08-Jun-2023", "CE")
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  function getOptionValues(jsonData, strikePrice, expiryDate, callput) {
    parsedData = jsonData
    const desiredOption = parsedData.records.data.find(option => {
      return option.strikePrice === strikePrice && option.expiryDate === expiryDate && option[callput];
    });
  
    if (desiredOption) {
      const identifier = desiredOption[callput].identifier;
      const lastPrice = desiredOption[callput].lastPrice;
      const openInterest = desiredOption[callput].openInterest;
  
      console.log(lastPrice)
    } else {
      return null;
    }
  }
  