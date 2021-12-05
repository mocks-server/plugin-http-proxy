module.exports = [
  {
    id: "proxy-all",
    url: "*",
    method: ["GET", "POST", "PATCH", "PUT"],
    variants: [
      {
        id: "enabled",
        handler: "proxy",
        host: () => {
          return "http://localhost:3200";
        },
        options: {},
      },
      {
        id: "disabled",
        response: (req, res, next) => next(),
      },
    ],
  },
  {
    id: "proxy-user",
    url: "/api/users/:id",
    method: ["GET", "POST", "PATCH", "PUT"],
    variants: [
      {
        id: "enabled",
        handler: "proxy",
        host: () => {
          return "http://localhost:3300";
        },
        options: {},
      },
    ],
  },
];
