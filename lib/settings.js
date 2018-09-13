module.exports = {
  ubp: {
    url: "https://api-uat.unionbankph.com/partners/sb/convergent/v1/oauth2",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: "https://ubpredirect.localtunnel.me/oauth/redirect",
    scope: "payments"
  }
};
