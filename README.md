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

## Prerequisites (Windows)

You need **Node.js** (v18 or higher recommended) and **npm** installed on your Windows system.

### 1. Download & Install Node.js on Windows
1. Download the Windows **LTS Installer (.msi)** from the official site:
   👉 **[https://nodejs.org](https://nodejs.org/)**
2. Run the downloaded installer (`.msi` file).
3. Follow the installation wizard:
   - Accept the license agreement.
   - Leave default install path (`C:\Program Files\nodejs\`).
   - Keep default components selected (includes `npm package manager`).
   - Click **Next** and then **Finish**.
4. Verify the installation:
   - Open **Command Prompt** (press `Win + R`, type `cmd`, and press Enter) or **PowerShell**.
   - Type the following commands:
     ```cmd
     node -v
     npm -v
     ```
   *(Both should print the installed version numbers, e.g., `v20.x.x` and `10.x.x`).*

---

## Step-by-Step Setup & Run Guide (Windows)

### Step 1: Open the Project Folder in Terminal
Open **Command Prompt**, **PowerShell**, or the integrated terminal in **VS Code**:
```cmd
cd C:\path\to\FLEXDROP
```
*(Tip: In Windows File Explorer, you can simply open the project folder, click on the address bar at the top, type `cmd`, and hit Enter).*

### Step 2: Install Project Dependencies
Run `npm install` to install all necessary packages (`express`, `dotenv`):
```cmd
npm install
```

### Step 3: Start the Server
Run the start command:
```cmd
npm start
```
*Or directly via Node:*
```cmd
node server.js
```

You will see:
```text
FlexDrop server running on http://localhost:3000
Mistral API key configured: Yes
```

### Step 4: Open in Your Browser
Open Chrome, Edge, or any browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## Windows Tips & Troubleshooting

- **Stop the Server**: Press `Ctrl + C` in the Command Prompt / PowerShell window, and type `Y` when prompted.
- **Port 3000 already in use?**
  - Change the port when running:
    - **In Command Prompt (CMD)**:
      ```cmd
      set PORT=3001 && npm start
      ```
    - **In PowerShell**:
      ```powershell
      $env:PORT="3001"; npm start
      ```
  - Or terminate the program on port 3000:
    ```cmd
    npx kill-port 3000
    ```
- **Resetting Demo Data**:
  - Click the **"Reset Demo Data"** floating button at the bottom right corner of the website to wipe cached orders, cart, and reviews.
- **Project Structure**:
  - `server.js` — Express backend handling static files, Mistral streaming API, and data logging.
  - `index.html` — Main single-page application structure.
  - `style.css` — Modern UI design system, animations, responsive layout.
  - `script.js` — Client-side cart, reviews, orders, search, and checkout logic.