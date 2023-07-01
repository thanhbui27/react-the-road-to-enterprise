import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from "fastify";

function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: HookHandlerDoneFunction
) {
  fastify.register(import("./features/events/eventsRoutes"), {
    prefix: "/events",
  });
  done();
}

export default routes;
