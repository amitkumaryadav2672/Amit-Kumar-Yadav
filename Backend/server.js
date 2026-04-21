const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: ["https://amit-kumar-yadav.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀 - CORS enabled for Vercel portfolio.");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to You (Owner)
    let mailOptionsOwner = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `You have a new message from your portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Auto-reply to Visitor
    let mailOptionsVisitor = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Amit Kumar Yadav`,
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nAmit Kumar Yadav`,
    };

    await transporter.sendMail(mailOptionsOwner);
    await transporter.sendMail(mailOptionsVisitor);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
