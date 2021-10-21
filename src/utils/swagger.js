exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Node Js Fastify Mongodb API",
      description:
        "Building a blazing fast REST API with Node.js, Fastify and Mongodb",
      version: "0.0.1",
    },
    externalDocs: {
      url: "http://swagger.io",
      decription: "Find more info here",
    },
  },
  host: "localhost:3000",
  schemas: ["http"],
  consumes: ["application/json"],
  produce: ["application/json"],
};
