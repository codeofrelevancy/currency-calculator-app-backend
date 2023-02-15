# Getting Started

This is a [Node.js](https://nodejs.org) and [Firebase](https://firebase.google.com) project.

## Install Dependencies

```bash
npm run install
```

or

```bash
npm install axios cron dotenv express firebase firebase-admin nodemon
```

## Run the Development Server

```bash
npm run dev
```

## How does this application work?

This application is a currency conversion tool that allows users to quickly and easily convert between different currencies. This backend server is responsible for fetching the conversion rates from an external API and storing them in a Firebase database. The rates are updated six times a day, ensuring that users have access to the most accurate and up-to-date information.

On the frontend, the user interface displays a list of currencies and allows the user to select the currencies they wish to convert. When the page loads, the frontend fetches the latest conversion rates directly from the Firebase database. The user can then enter the amount they wish to convert, and the frontend will calculate the result using the fetched conversion rates.

In addition to fetching and displaying the latest conversion rates, the frontend of the application also includes a feature that displays the timestamp of the last update in relative time. This allows users to quickly see how recently the rates were updated and ensure that they are working with the most current information.

To make it even easier for users to see at a glance whether the conversion rates are up-to-date, the application uses a green or red indicator to show whether the rates have been updated within the past 24 hours. If the rates have been updated within the past day, the indicator will be green, indicating that the rates are current. If the rates have not been updated within the past 24 hours, the indicator will be red, signaling to the user that the rates may be out of date.

This feature helps ensure that users always have access to the most accurate and current conversion rates, making the application a reliable and trustworthy tool for all of their currency conversion needs.

This application is designed to be simple and easy to use, with a clean and intuitive interface that makes it easy for users to convert currencies on the go. With its reliable backend server and up-to-date conversion rates, users can trust that they are getting accurate and current information every time they use the tool.

## API

Fixer API, Free Plan, 100 requests a month

```html
https://api.apilayer.com/fixer/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}
```

Exchange Rates Data API API, Free Plan, 250 requests a month

```html
https://api.apilayer.com/exchangerates_data/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}
```

## How to Deploy Your Node.js Application for Free with Render?

```html
https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/
```
