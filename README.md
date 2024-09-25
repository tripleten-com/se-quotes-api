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
    "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    "author": "Maya Angelou"
  }

  // ... more quotes
]
```

**GET https://se-quotes-api.onrender.com/v1/quotes/random**

Returns a random quote.

```jsonc
// Example response. The quote is selected randomly.
{
  "id": 2,
  "quote": "True peace is not merely the absence of tension; it is the presence of justice.",
  "author": "Martin Luther King, Jr."
}
```

**GET https://se-quotes-api.onrender.com/v1/quotes/:id**

Returns a specific quote, by its ID.

```jsonc
// Example response for https://se-quotes-api.onrender.com/v1/quotes/3
{
  "id": 3,
  "quote": "Life is what happens when you're busy making other plans.",
  "author": "John Lennon"
}
```

