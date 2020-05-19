const express = require("express");
const admin = require('firebase-admin');
let serviceAccount = require('./google-service-credentails.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();
