# Gold Price Tracker Dashboard

## Description
This project is a simple React dashboard that displays the live gold price using a public API. 
The application fetches the latest gold price and displays it in a clean dashboard interface.

## Features
- Fetch live gold price from API
- Display gold price in dashboard
- Refresh button to update price
- Error handling for API requests
- Simple and responsive UI

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Gold Price API

## Project Structure
gold-price-dashboard/
│
├─ public/ # Static files
├─ src/
│ ├─ components/ # React components (GoldPriceCard, PriceChart, PriceConverter)
│ ├─ hooks/ # Custom hooks (useGoldPrice)
│ ├─ services/ # API calls
│ ├─ App.js # Main app component
│ └─ index.js # Entry point
└─ package.json

## API Used
https://api.gold-api.com/price/XAU

## How to Run the Project

1. Clone the repository
git clone https://github.com/your-username/gold-price-dashboard.git

2. Go to the project folder
cd gold-price-dashboard

3. Install dependencies
npm install

4. Start the application
npm start

5. Open the browser and go to
http://localhost:3000

![Dashboard Screenshot](screenshot.png)
