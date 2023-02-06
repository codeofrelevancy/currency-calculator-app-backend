require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cron = require("cron");
const { db } = require("./firebase");

const port = process.env.SERVER_PORT || 8013;

const app = express();

app.use(express.json());

app.get("/currency/conversion_rates", async (req, res) => {
  const conversionRatesRef = db.collection("currency").doc("conversion_rates");
  const doc = await conversionRatesRef.get();
  if (!doc.exists) {
    return res.sendStatus(400);
  }

  res.status(200).send(doc.data());
});

const fetchConversionRates = async () => {
  try {
    // const response = await axios.get(
    //   `https://api.apilayer.com/fixer/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}`
    // );
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/${process.env.BASE_CURRENCY}`
    );
    const rates = response?.data?.rates;

    if (rates && Object.keys(rates).length) {
      const conversionRatesRef = db
        .collection("currency")
        .doc("conversion_rates");

      await conversionRatesRef.set({
        rates,
        timestamp: new Date().toString(),
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const cronJob = new cron.CronJob("*/90 * * * * *", () => {
  fetchConversionRates();
});

cronJob.start();

app.listen(port, () => console.log(`Server has started on port: ${port}`));
