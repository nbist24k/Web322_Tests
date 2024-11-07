const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Initialize express app
const app = express();
const port = 3000;

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [".pdf", ".doc", ".docx", ".txt"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed."
      )
    );
  }
};

// Set file size limit to 15MB
const maxFileSize = 15 * 1024 * 1024;

const upload = multer({
  storage: storage,
  limits: {
    fileSize: maxFileSize,
  },
  fileFilter: fileFilter,
}).single("document");

// Error handling functions
const handleUploadError = (err, req, res) => {
  if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
    const sizeMB = Math.round(req.headers["content-length"] / 1024 / 1024);
    return res.render("form", {
      error: `File is too large (${sizeMB}MB). Maximum size allowed is 15MB.`,
    });
  }

  if (err.message && err.message.includes("file type")) {
    return res.render("form", {
      error: err.message,
    });
  }

  return res.render("form", {
    error: "An error occurred while uploading the file.",
  });
};

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("form", { error: null });
});

app.post("/submit-form", (req, res) => {
  upload(req, res, (err) => {
    // Handle all upload errors with a single function
    if (err) {
      return handleUploadError(err, req, res);
    }

    // Handle missing terms acceptance
    if (!req.body.terms) {
      return res.render("form", {
        error: "You must agree to the terms and conditions",
      });
    }

    try {
      // Process form data
      const formData = {
        name: req.body.name,
        email: req.body.email,
        color: req.body.color,
        termsAccepted: true,
        file: req.file
          ? {
              filename: req.file.filename,
              originalname: req.file.originalname,
              size: req.file.size,
              mimetype: req.file.mimetype,
            }
          : null,
      };

      // Log form submission
      console.log("Form submission received:", formData);

      // Render success page
      return res.render("confirmation", {
        filename: req.file ? req.file.filename : null,
        termsAccepted: true,
      });
    } catch (error) {
      console.error("Error processing form:", error);
      return res.render("form", {
        error: "An error occurred while processing your submission.",
      });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
