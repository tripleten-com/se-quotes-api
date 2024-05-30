# JustSomeQuotes

An simple API that serves up random quotes.

## Endpoints

**GET https://update-the-url/quotes**

Returns a JSON array containing all the quotes in our database.

```json
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

**GET https://update-the-url/quotes/random**

Returns a random quote.

```json
// Example response. The quote is selected randomly.
{
  "id": 2,
  "quote": "The way to get started is to quit talking and begin doing.",
  "author": "Walt Disney"
}
```

**GET https://update-the-url/quotes/:id**

Returns a specific quote, by its ID.

```json
// Example response for https://update-the-url/quotes/3
{
  "id": 3,
  "quote": "Your time is limited, don't waste it living someone else's life.",
  "author": "Steve Jobs"
}
```
