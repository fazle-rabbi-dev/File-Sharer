const axios = require("axios");

const ngrokEndpoint = 'http://localhost:4040/api/tunnels'; // replace with your ngrok endpoint
const ngrokUrlRegex = /^https?:\/\/[a-z0-9]+\.ngrok\.io$/i; // regex to match ngrok.io URLs

axios.get(ngrokEndpoint)
  .then(response => {
    const tunnels = response.data.tunnels;
    console.log(tunnels[0].public_url);
  })
  .catch(error => {
    console.error(`Error retrieving public URL from ngrok endpoint: ${error}`);
  });
