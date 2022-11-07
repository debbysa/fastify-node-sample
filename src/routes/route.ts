import { FastifyInstance, FastifyPluginCallback } from "fastify"

const router: FastifyPluginCallback = (fastify: FastifyInstance, opts, next) => {
	fastify.route({
		method: "GET",
		url: "/foods",
		handler: () => {
			return {
				data: ["rawon", "mie ayam", "bakso solo", "mie ramen"],
			}
		},
	})

	next()
}

export default router
