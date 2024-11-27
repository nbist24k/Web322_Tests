# Recipe Manager

A simple CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express, Sequelize, and PostgreSQL.

## Features

- Create new recipes with title, ingredients, instructions, cooking time, and difficulty level
- View all recipes in a clean, responsive interface
- Edit existing recipes
- Delete recipes
- Persistent storage using PostgreSQL database
- Responsive design with Bootstrap

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database (This project uses Neon.tech for PostgreSQL hosting)
- npm (Node Package Manager)

## Tech Stack

- **Backend:**

  - Node.js
  - Express.js
  - Sequelize ORM
  - PostgreSQL

- **Frontend:**
  - EJS (Embedded JavaScript templates)
  - Bootstrap 5
  - Custom CSS

## Project Structure

```
project/
├── models/
│   └── postgresModel.js     # Database model definitions
├── routes/
│   └── postgresRoutes.js    # API routes
├── public/
│   └── css/
│       └── styles.css       # Custom styles
├── views/
│   └── index.ejs           # Main view template
├── .env                    # Environment variables
├── server.js              # Application entry point
└── package.json           # Project dependencies
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=your_postgresql_connection_string
PORT=4250
NODE_ENV=development
```

4. Start the development server:

```bash
npm run dev
```

## API Endpoints

- `GET /` - Render main page with all recipes
- `GET /recipes` - Get all recipes
- `GET /recipes/:id` - Get a specific recipe
- `POST /recipes` - Create a new recipe
- `PUT /recipes/:id` - Update an existing recipe
- `DELETE /recipes/:id` - Delete a recipe

## Database Schema

### Recipe Model

| Field        | Type     | Description                 |
| ------------ | -------- | --------------------------- |
| id           | Integer  | Primary key, auto-increment |
| title        | String   | Recipe title                |
| ingredients  | Text     | List of ingredients         |
| instructions | Text     | Cooking instructions        |
| cookingTime  | Integer  | Cooking time in minutes     |
| difficulty   | Enum     | 'easy', 'medium', or 'hard' |
| createdAt    | DateTime | Record creation timestamp   |
| updatedAt    | DateTime | Record update timestamp     |

## Development

To start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Port number for the server (default: 3000)
- `NODE_ENV`: Application environment (development/production)

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
