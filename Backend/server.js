import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import { config as dotenvConfig } from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// Use the fileURLToPath() and dirname() to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenvConfig({ path: path.resolve(__dirname, "./.env") }); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (resume.pdf in this case)
app.use("/public", express.static(path.resolve(__dirname, "public")));

// Route to handle form submission
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  // Check if all fields are filled
  if (!name || !email || !message) {
    return res.status(400).send("All fields are required");
  }

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Use environment variables
      pass: process.env.EMAIL_PASS, // Use environment variables
    },
  });

  const mailOptions = {
    from: email,
    to: "anuragpanda222@gmail.com",
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      return res.status(500).send("Error sending email: " + error.message); // Send error message to client
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

// Route to serve resume.pdf file
app.get("/download-resume", (req, res) => {
  const filePath = path.resolve(__dirname, "public", "resume.pdf");
  res.download(filePath, "resume.pdf", (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("Resume not found");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
