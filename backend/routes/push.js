// server/push.js

const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Replace with your actual VAPID keys
const publicVapidKey = 'BJqdwcvAHUZMG6VjbRxZmiPaiYT1CIAMKZiNizEKvNR-7dGajmV2zUhKXAQd8LQwjAV76q1Wiah2LRgbA0UMzBg';
const privateVapidKey = 'K9eW4wOVP4KL4-MSGDqwjRau77MRButKX4NfNBUEBko';

webpush.setVapidDetails(
  'mailto:you@example.com',
  publicVapidKey,
  privateVapidKey
);

// Endpoint to receive subscription and send notification
app.post('/subscribe', (req, res) => {
  const subscription = req.body;

  const payload = JSON.stringify({
    title: 'Welcome to ShopSmart!',
    body: 'Thanks for subscribing to notifications 🎉'
  });

  webpush.sendNotification(subscription, payload)
    .then(() => res.status(201).json({}))
    .catch(err => {
      console.error('Error sending notification:', err);
      res.status(500).json({ error: 'Notification failed' });
    });
});

module.exports = app;