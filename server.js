require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const fs = require('fs');
const path = require('path');
const os = require('os');

// On serverless environments (like Vercel), the root file system is read-only.
// Use os.tmpdir() on Vercel, and __dirname for local development.
const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const baseDir = isServerless ? os.tmpdir() : __dirname;

const LOG_FILE = path.join(baseDir, 'chat_logs.txt');
const USER_DETAILS_FILE = path.join(baseDir, 'user_details.txt');
const REVIEWS_LOG_FILE = path.join(baseDir, 'reviews_log.txt');

function safeInitFile(filePath, header) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, header, 'utf8');
    }
  } catch (err) {
    console.warn(`[Notice] File system init bypassed for ${path.basename(filePath)}:`, err.message);
  }
}

// Initialize chat log file with header if it doesn't exist
safeInitFile(LOG_FILE, [
  '================================================================================',
  '                   FLEXDROP AI CHATBOT - CONVERSATION LOGS                      ',
  `                   Log file created: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)`,
  '================================================================================\n\n'
].join('\n'));

// Initialize user details file with header if it doesn't exist
safeInitFile(USER_DETAILS_FILE, [
  '================================================================================',
  '                     FLEXDROP - SAVED USER DETAILS & ADDRESSES                  ',
  `                     File created: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)`,
  '================================================================================\n\n'
].join('\n'));

// Initialize product reviews log file if it doesn't exist
safeInitFile(REVIEWS_LOG_FILE, [
  '================================================================================',
  '                     FLEXDROP - CUSTOMER PRODUCT REVIEWS LOG                    ',
  `                     File created: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)`,
  '================================================================================\n\n'
].join('\n'));

// Function to log saved user details with time and date to local txt file
function logUserDetails(user) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
  const timeStr = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });

  const entry = [
    '--------------------------------------------------------------------------------',
    `[USER PROFILE RECORD] DATE: ${dateStr} | TIME: ${timeStr} IST`,
    '--------------------------------------------------------------------------------',
    `Full Name    : ${user.name || 'N/A'}`,
    `Phone        : ${user.phone || 'N/A'}`,
    `Address Type : ${user.addrType || 'Home'}`,
    `Flat / House : ${user.line1 || 'N/A'}`,
    `Street / Area: ${user.line2 || 'N/A'}`,
    `City         : ${user.city || 'N/A'}`,
    `PIN Code     : ${user.pin || 'N/A'}`,
    `State        : ${user.state || 'Jharkhand'}`,
    `Landmark     : ${user.landmark || 'N/A'}`,
    '--------------------------------------------------------------------------------\n\n'
  ].join('\n');

  fs.appendFile(USER_DETAILS_FILE, entry, 'utf8', (err) => {
    if (err) {
      console.error('Failed to write to user_details.txt:', err);
    } else {
      console.log(`[USER LOG] Saved user details for "${user.name}" to user_details.txt at ${timeStr}`);
    }
  });
}

// Function to log a customer product review to local txt file
function logProductReview(rev) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
  const timeStr = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });

  const entry = [
    '--------------------------------------------------------------------------------',
    `[CUSTOMER REVIEW] DATE: ${dateStr} | TIME: ${timeStr} IST`,
    '--------------------------------------------------------------------------------',
    `Product ID   : ${rev.productId || 'N/A'}`,
    `Product Name : ${rev.productName || 'N/A'}`,
    `Reviewer     : ${rev.author || 'Anonymous'}`,
    `City / State : ${rev.city || 'India'}`,
    `Star Rating  : ${rev.rating || 5} / 5 Stars`,
    `Verified     : ${rev.verified ? 'YES' : 'NO'}`,
    `Comments     : ${rev.comment || ''}`,
    '--------------------------------------------------------------------------------\n\n'
  ].join('\n');

  fs.appendFile(REVIEWS_LOG_FILE, entry, 'utf8', (err) => {
    if (err) {
      console.error('Failed to write to reviews_log.txt:', err);
    } else {
      console.log(`[REVIEW LOG] Saved review for Product #${rev.productId} by "${rev.author}" at ${timeStr}`);
    }
  });
}

// Function to log a chat conversation to local txt file with date, time, and proper format
function logChatEntry(userMessage, botResponse) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
  const timeStr = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });

  const entry = [
    '--------------------------------------------------------------------------------',
    `[LOG ENTRY] DATE: ${dateStr} | TIME: ${timeStr} IST`,
    '--------------------------------------------------------------------------------',
    `USER:`,
    `${(userMessage || '').trim()}`,
    '',
    `FLEXDROP ASSISTANT:`,
    `${(botResponse || '').trim()}`,
    '--------------------------------------------------------------------------------\n\n'
  ].join('\n');

  fs.appendFile(LOG_FILE, entry, 'utf8', (err) => {
    if (err) {
      console.error('Failed to write to chat_logs.txt:', err);
    } else {
      console.log(`[CHAT LOG] Saved conversation to chat_logs.txt at ${timeStr}`);
    }
  });
}

// Proxy endpoint for Mistral API with retry logic
app.post(['/api/chat', '/chat'], async (req, res) => {
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: req.body.model || 'open-mistral-nemo',
          messages: req.body.messages,
          stream: true,
          max_tokens: 512,
          temperature: 0.7
        })
      });

      // If rate limited, wait and retry
      if (response.status === 429) {
        const retryAfter = response.headers.get('retry-after');
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : attempt * 2000;
        console.log(`Rate limited (attempt ${attempt}/${maxRetries}), waiting ${waitTime}ms...`);
        if (attempt < maxRetries) {
          await new Promise(r => setTimeout(r, waitTime));
          continue;
        }
        return res.status(429).json({ error: 'Rate limited. Please wait a moment and try again.' });
      }

      if (!response.ok) {
        const err = await response.text();
        console.error(`Mistral API error (${response.status}):`, err);
        return res.status(response.status).json({ error: err });
      }

      // Stream the response back to the client
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullAssistantResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const textChunk = decoder.decode(value, { stream: true });
        res.write(textChunk);

        // Accumulate assistant content from SSE lines
        const lines = textChunk.split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            const dataStr = trimmed.slice(6).trim();
            if (dataStr && dataStr !== '[DONE]') {
              try {
                const parsed = JSON.parse(dataStr);
                const delta = parsed.choices?.[0]?.delta?.content;
                if (delta) fullAssistantResponse += delta;
              } catch (e) {
                // Ignore parse errors on partial chunks
              }
            }
          }
        }
      }

      res.end();

      // Log conversation to local txt file
      const userMessage = Array.isArray(req.body.messages)
        ? [...req.body.messages].reverse().find(m => m.role === 'user')?.content
        : '';
      if (userMessage && fullAssistantResponse) {
        logChatEntry(userMessage, fullAssistantResponse);
      }
      return; // Success, exit the retry loop

    } catch (err) {
      console.error(`Attempt ${attempt} failed:`, err.message);
      if (attempt === maxRetries) {
        return res.status(500).json({ error: 'Failed to connect to Mistral API' });
      }
      await new Promise(r => setTimeout(r, attempt * 1000));
    }
  }
});

// Endpoint to download server chat logs
app.get(['/api/chat-logs/download', '/chat-logs/download'], (req, res) => {
  if (fs.existsSync(LOG_FILE)) {
    res.download(LOG_FILE, 'flexdrop_chat_logs.txt');
  } else {
    res.status(404).send('No chat logs found yet.');
  }
});

// Endpoint to save user profile and address details
app.post(['/api/save-user', '/save-user'], (req, res) => {
  const userData = req.body;
  if (userData && (userData.name || userData.phone)) {
    logUserDetails(userData);
    return res.json({ success: true, message: 'User details recorded to user_details.txt' });
  }
  return res.status(400).json({ error: 'Missing user name or details' });
});

// Endpoint to download saved user details file
app.get(['/api/user-details/download', '/user-details/download'], (req, res) => {
  if (fs.existsSync(USER_DETAILS_FILE)) {
    res.download(USER_DETAILS_FILE, 'flexdrop_user_details.txt');
  } else {
    res.status(404).send('No user details saved yet.');
  }
});

// Endpoint to save a customer product review to server file
app.post(['/api/save-review', '/save-review'], (req, res) => {
  const rev = req.body;
  if (rev && rev.comment) {
    logProductReview(rev);
    return res.json({ success: true, message: 'Review recorded to reviews_log.txt' });
  }
  return res.status(400).json({ error: 'Missing review comment' });
});

// Endpoint to download saved customer reviews log file
app.get(['/api/reviews/download', '/reviews/download'], (req, res) => {
  if (fs.existsSync(REVIEWS_LOG_FILE)) {
    res.download(REVIEWS_LOG_FILE, 'flexdrop_reviews_log.txt');
  } else {
    res.status(404).send('No customer reviews saved yet.');
  }
});

// Endpoint to wipe/reset all demo log files on server
app.post(['/api/clear-all-data', '/clear-all-data'], (req, res) => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const chatHeader = [
      '================================================================================',
      '                   FLEXDROP AI CHATBOT - CONVERSATION LOGS                      ',
      `                   Log file reset: ${timestamp} (IST)`,
      '================================================================================\n\n'
    ].join('\n');
    fs.writeFileSync(LOG_FILE, chatHeader, 'utf8');

    const userHeader = [
      '================================================================================',
      '                     FLEXDROP - SAVED USER DETAILS & ADDRESSES                  ',
      `                     File reset: ${timestamp} (IST)`,
      '================================================================================\n\n'
    ].join('\n');
    fs.writeFileSync(USER_DETAILS_FILE, userHeader, 'utf8');

    const reviewsHeader = [
      '================================================================================',
      '                     FLEXDROP - CUSTOMER PRODUCT REVIEWS LOG                    ',
      `                     File reset: ${timestamp} (IST)`,
      '================================================================================\n\n'
    ].join('\n');
    fs.writeFileSync(REVIEWS_LOG_FILE, reviewsHeader, 'utf8');

    console.log(`[RESET] All server logs wiped clean at ${timestamp}`);
    return res.json({ success: true, message: 'All demo data & server logs cleared' });
  } catch (err) {
    console.error('Error clearing demo logs:', err);
    return res.status(500).json({ error: 'Failed to clear server logs' });
  }
});

// Health check and root API status
app.get(['/api', '/api/health', '/health'], (req, res) => {
  res.json({ status: 'ok', service: 'FlexDrop API', timestamp: new Date().toISOString() });
});

// Static directories to search across environments (local and Vercel serverless)
const staticRoots = [
  path.resolve(__dirname),
  path.resolve(process.cwd()),
  path.resolve(__dirname, '..')
];

// Mount static middleware for all possible roots
staticRoots.forEach(dir => {
  try {
    app.use(express.static(dir));
  } catch (e) {}
});

// Explicit route for homepage / index.html
app.get(['/', '/index.html'], (req, res) => {
  for (const root of staticRoots) {
    const candidate = path.join(root, 'index.html');
    if (fs.existsSync(candidate)) {
      return res.sendFile(candidate);
    }
  }
  res.sendFile(path.resolve('index.html'));
});

// Explicit static handlers for style and script
app.get('/style.css', (req, res) => {
  for (const root of staticRoots) {
    const candidate = path.join(root, 'style.css');
    if (fs.existsSync(candidate)) {
      res.setHeader('Content-Type', 'text/css');
      return res.sendFile(candidate);
    }
  }
  res.sendFile(path.resolve('style.css'));
});

app.get('/script.js', (req, res) => {
  for (const root of staticRoots) {
    const candidate = path.join(root, 'script.js');
    if (fs.existsSync(candidate)) {
      res.setHeader('Content-Type', 'application/javascript');
      return res.sendFile(candidate);
    }
  }
  res.sendFile(path.resolve('script.js'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 FlexDrop running at http://localhost:${PORT}`);
  });
}

module.exports = app;

