import type { AppType } from '@/server/hono'
import { hc } from 'hono/client'

export const hono = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000')
