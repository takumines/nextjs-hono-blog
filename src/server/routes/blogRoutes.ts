import {
	BlogIdSchema,
	BlogSchema,
	BlogsSchema,
	CreateBlogSchema,
} from '@/server/models/blog-schemas'
import { createRoute, z } from '@hono/zod-openapi'

export const getBlogsRoute = createRoute({
	path: '/',
	method: 'get',
	description: '全ブログの取得',
	responses: {
		200: {
			description: '成功',
			content: {
				'application/json': {
					schema: BlogsSchema,
				},
			},
		},
	},
})

export const getBlogByIdRoute = createRoute({
	path: '/{id}',
	method: 'get',
	description: 'IDを元にブログの取得',
	request: {
		params: BlogIdSchema,
	},
	responses: {
		200: {
			description: '成功',
			contentZ: {
				'application/json': {
					schema: BlogSchema,
				},
			},
		},
		404: {
			description: 'ブログが見つかりません',
			content: {
				'application/json': {
					schema: z.null(),
				},
			},
		},
	},
})

export const createBlogRoute = createRoute({
	path: '/',
	method: 'post',
	description: '新しいブログを作成',
	request: {
		body: {
			content: {
				'application/json': {
					schema: CreateBlogSchema,
				},
			},
		},
	},
	responses: {
		201: {
			description: '作成成功',
			content: {
				'application/json': {
					schema: BlogSchema,
				},
			},
		},
	},
})
