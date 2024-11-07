# Web Form Application

A modern web form application built with Node.js and Express that handles user registration with file upload functionality. The application demonstrates secure file handling, form validation, and responsive design.

## Features

- User registration form with validation
- File upload support (up to 15MB)
- Success confirmation page
- File storage in uploads directory

## Tech Stack

- **Backend:**

  - Node.js
  - Express.js
  - Multer (file upload handling)
  - EJS (templating engine)

- **Frontend:**
  - HTML5
  - CSS3

## Project Structure

```
project/
├── public/
│   └── css/
│       └── styles.css      # Global styles for forms and pages
├── uploads/               # Auto-created directory for uploaded files
├── views/
│   ├── form.ejs          # Registration form template
│   └── confirmation.ejs  # Success page template
├── server.js             # Main application server and route handlers
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Locked versions of dependencies
└── README.md            # Project documentation
```

## Quick Start

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   - Development mode (with auto-reload):
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

4. Access the application at `http://localhost:3000`

## File Upload Guidelines

- **Maximum file size:** 15MB
- **Supported formats:** PDF, DOC, DOCX, TXT
- Files are stored in the auto-generated `uploads` directory

## Form Processing

This application uses Multipart form data processing because:

- It efficiently handles both file uploads and text data in a single request
- Provides better support for binary file uploads
- Allows for progress tracking of file uploads (useful for larger files)
- More secure for handling file uploads compared to URL encoded data

## Error Handling

The application includes comprehensive error handling for:

- File size exceeded (15MB limit)
- Invalid file types
- Terms and conditions acceptance
- General server errors
