// proxy-server.js
const express = require('express');
const httpProxy = require('http-proxy');

// Create a new Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Create a proxy instance
const proxy = httpProxy.createProxyServer();

// PowerPages Details
const siteUrl = "";
const cookie = "";

// Add middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Expose-Headers', 'entityid');
    if (req.method === 'OPTIONS') {
        // Pre-flight request. Reply successfully:
        res.sendStatus(200);
    } else {
        next();
    }
});

// Define a route to forward API requests
app.all('/_services/*', (req, res) => {
    // Modify the request headers to include the hardcoded cookie
    req.headers['Cookie'] = cookie;
    // Forward the modified request to the target API server
    proxy.web(req, res, { target: siteUrl, changeOrigin: true, secure:false });
});

// Define a route to forward API requests
app.all('/_api/*', (req, res) => {
    // Modify the request headers to include the hardcoded cookie
    req.headers['Cookie'] = cookie;
    // Forward the modified request to the target API server
    proxy.web(req, res, { target: siteUrl, changeOrigin: true, secure:false });
});

// Log errors if the proxy encounters any
proxy.on('error', (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
});

// Event listener for capturing and forwarding response headers
proxy.on('proxyRes', (proxyRes, req, res) => {
    res.setHeader('Access-Control-Expose-Headers', '*');
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});