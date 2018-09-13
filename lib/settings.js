const config = require("config");

module.exports = {
  base_url: "https://api-uat.unionbankph.com/partners/sb/",
  client_id: process.env.CLIENT_ID || config.get("client_id"),
  client_secret: process.env.CLIENT_SECRET || config.get("client_secret"),
  redirect_uri: "https://unionbank-backend-demo.herokuapp.com/oauth/redirect"
};
