# Power Pages Web API Proxy Server

This guide details the configuration and setup of a proxy server designed to facilitate API calls to the Power Pages Web API from within a PCF component test harness.

## Proxy Server Setup

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js

### Installation

First, you need to install the necessary npm packages. Run the following commands in your terminal:

```sh
npm install express
npm install http-proxy
```

## Proxy Server Configuration and Setup

This guide outlines the steps required to configure and run a proxy server using Node.js. The proxy server facilitates authenticated API calls to a specified site URL using cookie-based authentication.

### Configuration Steps

1. **Update Site URL**:

   ```javascript
   const siteUrl = 'https://your-site-url.com';
   ```

2. **Update Cookie**: (you can get cookie by calling any api directly in browser to get the value)

   ```javascript
   const cookie = '{get the cookie from power pages site}';
   ```

![image](https://github.com/Munendra7/Power-Platform/assets/89851958/a5fd18cc-2163-4ab8-9264-6698ec4f1f77)

3. **Run `proxy-server.js`**:
   - Locate the `proxy-server.js` file.
   - Run the following command to start the server:

   ```sh
   node proxy-server.js
   ```
