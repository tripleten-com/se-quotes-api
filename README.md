# JustSomeQuotes

An simple API that serves up random quotes.

## Endpoints

**GET https://se-quotes-api.onrender.com/v1/quotes**

Returns a JSON array containing all the quotes in our database.

```jsonc
// Example response
[
  {
    "id": 1,
    "quote": "Life is what happens when you're busy making other plans.",
    "author": "John Lennon"
  },

  // ... more quotes
]
```

**GET https://se-quotes-api.onrender.com/v1/quotes/random**

Returns a random quote.

```jsonc
// Example response. The quote is selected randomly.
{
  "id": 2,
  "quote": "The way to get started is to quit talking and begin doing.",
  "author": "Walt Disney"
}
```

**GET https://se-quotes-api.onrender.com/v1/quotes/:id**

Returns a specific quote, by its ID.

```jsonc
// Example response for https://se-quotes-api.onrender.com/v1/quotes/3
{
  "id": 3,
  "quote": "Your time is limited, don't waste it living someone else's life.",
  "author": "Steve Jobs"
}
```
