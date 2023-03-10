// Import the functions you need from the SDKs you need
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./firebase-cert.json');

// Initialize the firebase
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = { db };
