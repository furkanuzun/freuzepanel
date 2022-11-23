module.exports = ({ env }) => ({
    url: env("https://panel.freuzecoffee.com"),
    app: {
      keys: env.array("APP_KEYS", ["freuzeKey", "freuzeKey2"]),
    },
  });
  