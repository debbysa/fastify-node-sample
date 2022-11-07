import fastify from "fastify"

const server = fastify()

interface IQuerystring {
	username: string
	password: string
}

interface IHeaders {
	"h-custom": string
}

server.get("/ping", async (request, reply) => {
	return "pong\n"
})

server.get<{
	Querystring: IQuerystring
	Headers: IHeaders
}>(
	"/auth",
	{
		preValidation: (request, reply, done) => {
			const { username, password } = request.query
			done(username !== "admin" ? new Error("Must be admin") : undefined)
		},
	},
	async (request, reply) => {
		const { username, password } = request.query
		const customerHeader = request.headers["h-Custom"]
		// do something with request data
		console.log({ username, password })

		return `logged in!`
	}
)

server.listen({ port: 8080 }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}

	console.log(`Server listening at ${address}`)
})
