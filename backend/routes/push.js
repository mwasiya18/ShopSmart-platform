const express = require('express');
const router = express.Router();
const webpush = require('web-push');

// Replace with your actual VAPID keys
const publicVapidKey = 'BGvXL4hdyBcgehAhHXQqsPfpDJixflxaN7FTAC1WmI-xCrQLwG28_Py1yNapHo0EbXDGnRQ5CeGolqwE_mBvdj0';
const privateVapidKey = '_T_MelFRoSfhkTMq1DmzSiFTGbb5C8t6FKTnLR3YO_Q';

webpush.setVapidDetails(
  'mailto:your@email.com',
  publicVapidKey,
  privateVapidKey
);

// Store subscriptions in memory (or use DB)
let subscriptions = [];

// 🔹 Receive subscription from frontend
router.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({ message: 'Subscribed successfully' });
});

// 🔹 Trigger push notification manually
router.post('/notify', (req, res) => {
  const payload = JSON.stringify({
    title: '🛍️ ShopSmart Alert',
    body: 'New product recommendations available!',
  });

  subscriptions.forEach(sub => {
    webpush.sendNotification(sub, payload).catch(err => console.error(err));
  });

  res.status(200).json({ message: 'Notifications sent' });
});

module.exports = router;