# Backend Guide: Email Notification Server

This document explains the backend logic that handles your contact form.

## Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Mail Service**: Nodemailer
- **Environment**: Dotenv (for secure credentials)
- **Security**: CORS (allows your frontend to talk to this backend)

## File Contents (`/server`)
- **`server.js`**: The main server file.
- **`.env`**: Your secret credentials (Gmail and App Password).
- **`package.json`**: Lists dependencies like `express` and `nodemailer`.

## The `/send-email` Endpoint
This endpoint is the heart of your message system. Here is what happens when it receives a request:
1. **Transporter Setup**: It initializes a connection to Gmail using the `EMAIL_USER` and `EMAIL_PASS` from your `.env`.
2. **Owner Notification**: It sends an email *to you* (`yadavamit847412@gmail.com`) with the user's name, email, and message.
3. **Visitor Auto-Reply**: It sends a polite "Thank you" email *to the person who filled out the form*.
4. **Response**: It sends a `200 OK` status back to your React app so it can show the "Message Sent!" success message.

## Security Note
We use a **Google App Password** instead of your real password. This is safer and required by Google for third-party apps like this one.

## How to Run
```bash
cd server
node server.js
```
The server runs on: `http://localhost:5000`
