# Frontend Guide: React Portfolio

This document explains the frontend architecture of your portfolio.

## Technology Stack
- **Framework**: React (v19)
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios (used for API calls to the backend)
- **Routing**: React Router DOM (v7)

## Directory Structure (`/src`)
- **`main.jsx`**: The entry point that renders the React app.
- **`App.jsx`**: The main layout wrapper. It handles routing and page-level animations using `AnimatePresence`.
- **`components/`**: Contains all UI sections:
    - `Hero.jsx`: Your intro, profile image, and resume download.
    - `Skills.jsx`: A grid displaying your technical expertise.
    - `Projects.jsx`: Showcases your work with interactive cards.
    - `Education.jsx`: Displays your timeline of experience and education.
    - `Contact.jsx`: The functional contact form that talks to the backend.
- **`assets/`**: Local images like `amit.jpeg`.

## Key Logic: Contact Form
The contact form in `Contact.jsx` uses a custom hook-like state to manage inputs. 
When you click **"Send Message"**:
1. It validates the name, email, and message format.
2. It sends a POST request using `axios` to `http://localhost:5000/send-email`.
3. It updates the button UI to show "Sent!" upon success.

## How to Run
```bash
npm run dev
```
Accessible at: `http://localhost:5173`
