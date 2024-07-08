const express = require("express");
const app = express();
const path = require("path");

// Serve the PAC file
app.get("/proxy.pac", (req, res) => {
  res.sendFile(path.join(__dirname, "proxy.pac"));
console.log('ec')
});

const port = 3000;
app.listen(port, () => {
  console.log(`PAC file server running at http://localhost:${port}/proxy.pac`);
});
