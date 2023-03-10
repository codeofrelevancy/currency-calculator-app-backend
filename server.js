require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cron = require('cron');
const { db } = require('./firebase');

const port = process.env.SERVER_PORT || 8013;

const app = express();

app.use(express.json());

const fetchConversionRates = async () => {
  try {
    const response = await axios.get(
      `https://api.apilayer.com/exchangerates_data/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}`,
    );

    const rates = response?.data?.rates;

    if (rates && Object.keys(rates).length > 0) {
      const conversionRatesRef = db
        .collection('currency')
        .doc('conversion_rates');

      await conversionRatesRef.set({
        rates,
        timestamp: new Date().toString(),
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const cronJob = new cron.CronJob('0 */4 * * *', fetchConversionRates);

cronJob.start();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
