const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const quotesFilePath = path.join(__dirname, "quotes.json");

// Function to read quotes from the JSON file
const getQuotes = () => {
  const data = fs.readFileSync(quotesFilePath);
  return JSON.parse(data);
};

// Endpoint to check ping
app.get("/ping", (req, res) => {
  res.send('pong');
});

// Endpoint to get all quotes
app.get("/v1/quotes", (req, res) => {
  const quotes = getQuotes();
  res.json(quotes);
});

// Endpoint to get a random quote
app.get("/v1/quotes/random", (req, res) => {
  const quotes = getQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Endpoint to get a quote by ID
app.get("/v1/quotes/:id", (req, res) => {
  const quotes = getQuotes();
  const quote = quotes.find((q) => q.id === parseInt(req.params.id));
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ error: "Quote not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
