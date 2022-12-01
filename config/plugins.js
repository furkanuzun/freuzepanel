const crypto = require("crypto");

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: "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",
      },
      settings: {
        defaultFrom: "freuzecoffee@gmail.com",
        defaultReplyTo: "freuzecoffee@gmail.com",
        testAddress: "freuzecoffee@gmail.com",
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
    },
  },
});
