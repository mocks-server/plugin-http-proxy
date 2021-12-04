module.exports = [
  {
    id: "proxy-all",
    url: "*",
    method: ["GET", "POST", "PATCH", "PUT"],
    variants: [
      {
        id: "enabled",
        handler: "proxy",
        host: "http://localhost:3200",
        options: {},
      },
      {
        id: "disabled",
        response: (req, res, next) => next(),
      },
    ],
  },
];
