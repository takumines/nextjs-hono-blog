import { authOptions } from '@/lib/auth.config'
import prisma from '@/lib/prisma'
import type { RouteHandler } from '@hono/zod-openapi'
import { getServerSession } from 'next-auth/next'
import type { createBlogRoute } from '../routes/blogRoutes'

export const createBlogHandler: RouteHandler<typeof createBlogRoute> = async (c) => {
	const { title, content } = c.req.valid('json')

	const session = await getServerSession(authOptions)

	if (!session?.user.id) {
		throw Error('認証してください。')
	}

	const blogs = await prisma.blog.create({
		data: {
			userId: session.user.id,
			title,
			content,
		},
		include: {
			user: {
				select: {
					name: true,
					image: true,
				},
			},
		},
	})

	return c.json(blogs, 201)
}
