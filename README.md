# Dynamic Post Explorer
**WAD 1 — Week 7 Activity | Fetch API & Asynchronous Data**

---

## Overview

Dynamic Post Explorer is a client-side web application that retrieves and displays blog posts from an external API without refreshing the page. It demonstrates the core principles of asynchronous JavaScript, including the Fetch API, async/await syntax, error handling, and safe DOM manipulation.

---

## Activity Goal

Load blog posts dynamically using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) — a free, public REST API used for testing and prototyping.

---

## Features

- Fetches the first 5 posts from the JSONPlaceholder `/posts` endpoint on button click
- Displays a loading indicator while the request is in progress
- Disables the load button during active requests to prevent duplicate submissions
- Handles HTTP errors (e.g. 404, 500) with a manual `response.ok` check
- Displays a user-friendly error message with a **Retry** button on failure
- Handles empty API responses gracefully with an empty state message
- Renders all post data safely using `textContent` to prevent XSS injection
- Updates the page dynamically with no full page reload (AJAX)


## How It Works

1. User clicks the **Load Posts** button
2. The button is disabled and a loading indicator appears
3. An HTTP GET request is sent to `https://jsonplaceholder.typicode.com/posts`
4. The response is checked for HTTP errors via `response.ok`
5. The JSON body is parsed using `response.json()`
6. The first 5 posts are extracted using `.slice(0, 5)`
7. Each post is rendered as a card using `createElement` and `textContent`
8. If the request fails, an error message and Retry button are shown
9. The loading indicator hides and the button re-enables in `finally`

## Author

**Nathaniel Urbano**
BSIS2 - La Verdad Christian College
Web Application Development 1 | 2026–2027
