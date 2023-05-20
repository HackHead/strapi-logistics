module.exports = {
    load: {
      order: [
        "Define the middlewares' load order by putting their name in this array in the right order",
      ],
      before: ["responseTime", "logger", "cors", "responses", "gzip"],
      after: ["parser", "router"],
    },
    settings: {
      cors: {
        enabled: true,
        origin: ["*"], // Replace '*' with the domains you want to enable CORS for
        headers: [
          "Content-Type",
          "Authorization",
          "X-Frame-Options",
          "Origin",
          "Accept",
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
        credentials: true,
      },
    },
  };
  