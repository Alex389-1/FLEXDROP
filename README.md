# FLEXDROP

FlexDrop is a fast, responsive delivery web application for Indian groceries, stationery supplies, and OTC medicines.

## Features
- **Curated Catalogues**: Groceries across 9 staple categories, Stationery essentials, and OTC Health & First-Aid products.
- **Dynamic Cart & Checkout**: Multi-step checkout with simulated OTP verification and demo payment options (UPI, Card, Net Banking, COD).
- **Order Tracking & Cancellation**: Track active demo orders in real time with the ability to cancel with a specified reason.
- **Product Details & Customer Reviews**: Detailed views for all items with verified customer reviews and a live "Write a Review" feature.
- **Data Persistence**: Local browser storage (`localStorage`) and local server logs for customer details (`user_details.txt`), chat logs (`chat_logs.txt`), and reviews (`reviews_log.txt`).
- **AI Shopping Assistant**: Mistral-powered streaming conversational chatbot for instant grocery and shopping support.
- **1-Click Demo Reset**: Clear all cached data anytime with a single click.

## Prerequisites

You need **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### 1. Install Node.js & npm

#### On Linux (Ubuntu / Debian / Mint):
```bash
# Update package list and install Node.js + npm
sudo apt update
sudo apt install -y nodejs npm

# Verify installation:
node -v
npm -v
```
*(Optional: To install the latest LTS version via NodeSource)*:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

#### On Windows / macOS:
1. Download the LTS installer from [nodejs.org](https://nodejs.org/).
2. Run the installer and follow the on-screen wizard.
3. Open your terminal / command prompt and check:
   ```bash
   node -v
   npm -v
   ```

---

## Step-by-Step Setup & Run Guide

### Step 1: Open the Project Directory
Open your terminal and navigate to the project directory:
```bash
cd /path/to/FLEXDROP
```

### Step 2: Install Project Dependencies
Run `npm install` to install Express and dotenv:
```bash
npm install
```

### Step 3: Configure Environment Variables
Create or verify your `.env` file in the project root directory:
```bash
# Create or edit .env
nano .env
```
Add the following content:
```env
PORT=3000
MISTRAL_API_KEY=your_mistral_api_key_here
```
> **Note**: You can get a free Mistral API key at [console.mistral.ai](https://console.mistral.ai/). If no key is provided, the core delivery app will work normally, but the AI chatbot assistant will show an API key notice.

### Step 4: Start the Server
Start the Node.js server:
```bash
npm start
```
*Or run directly:*
```bash
node server.js
```

You will see:
```text
FlexDrop server running on http://localhost:3000
Mistral API key configured: Yes
```

### Step 5: Open in Your Browser
Open your favorite web browser and visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## Useful Tips & Troubleshooting

- **Stop the Server**: Press `Ctrl + C` in the terminal running the server.
- **Port 3000 already in use?**
  - Change the port when running:
    ```bash
    PORT=3001 npm start
    ```
  - Or terminate the existing process occupying port 3000:
    ```bash
    npx kill-port 3000
    ```
- **Resetting Demo Data**:
  - Click the **"Reset Demo Data"** floating button at the bottom right corner of the website, or run:
    ```bash
    curl -X POST http://localhost:3000/api/clear-all-data
    ```
- **Project Structure**:
  - `server.js` — Express backend handling static files, Mistral streaming API, and data logging.
  - `index.html` — Main single-page application structure.
  - `style.css` — Modern UI design system, animations, responsive layout.
  - `script.js` — Client-side cart, reviews, orders, search, and checkout logic.