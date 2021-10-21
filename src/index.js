const fastify = require("fastify")({
  logger: true,
});
const productsRoutes = require("./routes/products.routes");
const swagger = require("./utils/swagger");
require("./utils/mongoose");

fastify.register(require("fastify-swagger"), swagger.options);
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

productsRoutes.forEach((route) => {
  fastify.route(route);
});
const start = async () => {
  await fastify.listen(3000);
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
};
start();
