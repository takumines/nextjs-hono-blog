import { OpenAPIHono } from '@hono/zod-openapi'

import { swaggerUI } from '@hono/swagger-ui'
import { basicAuth } from 'hono/basic-auth'
import { getBlogByIdHandler } from './controllers/getBlogById'
import { getBlogsHandler } from './controllers/getBlogs'
import { createBlogHandler } from './controllers/postBlog'
import { createBlogRoute, getBlogByIdRoute, getBlogsRoute } from './routes/blogRoutes'

export const app = new OpenAPIHono().basePath('/api')

const blogApp = new OpenAPIHono()
	.openapi(getBlogsRoute, getBlogsHandler)
	.openapi(getBlogByIdRoute, getBlogByIdHandler)
	.openapi(createBlogRoute, createBlogHandler)

app.route('/blogs', blogApp)

app
	.doc('specification', {
		openapi: '3.0.0',
		info: {
			title: 'Blog API',
			version: '1.0.0',
		},
	})
	.use('/doc/*', async (c, next) => {
		const auth = basicAuth({
			username: process.env.API_DOC_BASIC_AUTH_USER ?? '',
			password: process.env.API_DOC_BASIC_AUTH_PASS ?? '',
		})
		return auth(c, next)
	})
	.get('/doc', swaggerUI({ url: '/api/specification' }))

export default app
