# RCS Interactive Football Demo

A Node.js application that demonstrates sending Rich Communications Services (RCS) Rich Card Carousels and interactive football-themed messages using the Vonage API.

> You can find full step-by-step instructions on the [Vonage Developer Blog](#). (Not published yet)

#### Final App Preview

[![Final App Preview](https://img.youtube.com/vi/VwTZiua2P8U/hqdefault.jpg)](https://www.youtube.com/shorts/VwTZiua2P8U)

---

## Prerequisites

1. [Node.js installed on your machine.](https://nodejs.org/en/download)
2. [ngrok installed for exposing your local server to the internet.](https://ngrok.com/downloads/mac-os)
3. [Vonage Developer Account](https://developer.vonage.com/sign-up)
4. A registered RCS Business Messaging (RBM) Agent.
5. A phone with RCS capabilities for testing.

---

## Project Structure


---

## Setup Instructions

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/your-username/rcs-interactive-football.git](https://github.com/your-username/rcs-interactive-football.git)
   cd rcs-interactive-football
   
2. **Install dependencies:**
   ```bash
   npm install
   
3. **Configure environment variables:**
    - Rename `.env.example` to `.env`.
    - Add your `VONAGE_APPLICATION_ID`, `VONAGE_PRIVATE_KEY`, `VONAGE_API_SIGNATURE_SECRET`, and `RCS_SENDER_ID` values to the .env file.
      
4. **Add your Vonage private key:**
    - Place your `private.key` file in the root of the project directory.
      
6. **Start your Node server:**
   ```bash
   node src/index.js
   
8. **Expose your local server with ngrok:**
   ```bash
   ngrok http 3000
   ```
    - Copy the HTTPS forwarding URL provided by ngrok.

10. **Test your app by sending an RCS message:**
    ```bash
    curl -X POST https://YOUR_NGROK_URL/send-initial-message \
      -H "Content-Type: application/json" \
      -d '{"to": "YOUR_RCS_TEST_NUMBER"}'
    ```
    - Replace YOUR_NGROK_URL with your actual ngrok URL and YOUR_RCS_TEST_NUMBER with your test device number.

---

## Endpoints
- `POST /send-initial-message` — Sends an initial RCS message with suggested replies.

- `POST /inbound` — Handles inbound RCS replies and triggers interactive flows.

---

## Notes
All images used in the message templates are stored in the public/ directory.

The main business logic is organized under src/services/ and src/templates/.

Configuration is managed in config/config.js and .env.

--- 

License
MIT

