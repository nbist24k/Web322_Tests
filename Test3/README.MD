# Simple Web Application with AJAX, JSON, and APIs

This project is a simple web application that uses a RESTful API built with Node.js and Express to serve JSON data. The frontend makes AJAX calls to dynamically load and display data without page refreshes.

## Features

- **JSON Data**: Contains a `data.json` file with sample entries.
- **RESTful API**:
  - `/api/data`: Retrieves all data.
  - `/api/data/:id`: Retrieves data for a specific ID.
- **AJAX Functionality**:
  - Load all data with a button click.
  - Search for a specific entry by ID.
- **Error Handling**: Manages non-existent IDs and server errors.
- **Styling**: Basic CSS for improved presentation.

## Project Structure

```
├───package-lock.json
├───package.json
├───README.MD
├───server.js
├───data/
│      data.json
├───public/
│      style.css
└───views/
       index.html
```

## How to Run

1. **Install Dependencies**:

   ```bash
   npm init
   npm i express
   ```

2. **Start the Server**

   ```bash
   node server.js
   ```

3. Open `http://localhost:3525` in your browser to view the web app.

## API Endpoints

- `GET /api/data:` Returns all data from data.json.

- `GET /api/data/:id:` Returns data for a specific entry by ID.
