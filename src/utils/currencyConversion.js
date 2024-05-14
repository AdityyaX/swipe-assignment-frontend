import axios from 'axios';

const API_KEY = 'fca_live_3cals5ARWIUZLH5SbL3h6av6AeNFMWRu12L9OoqH'; 

const baseCurrency = 'USD';
export const convertCurrency = async (amount, targetCurrency) => {
  try {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${baseCurrency}`
    );
    const exchangeRates = response.data.data;
    const targetRate = exchangeRates[targetCurrency];

    if (targetRate) {
      const convertedAmount = amount * targetRate;
      return convertedAmount.toFixed(2);
    } else {
      throw new Error(`Exchange rate for ${targetCurrency} not found.`);
    }
  } catch (error) {
    console.error('Error converting currency:', error);
    throw error;
  }
};