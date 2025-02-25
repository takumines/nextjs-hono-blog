'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
	const { data: session } = useSession()

	return (
		<header className="h-[70px] border-b">
			<div className="container mx-auto h-full flex items-center justify-between">
				<h1 className="text-[1.5rem] font-bold">🔥 blog</h1>
				{session ? (
					<button
						type="submit"
						className="bg-Green-700 py-1 px-3 rounded-full font-bold
             hover:bg-Green-500 hover:shadow-md
             transition-all duration-200 ease-in-out
             active:scale-95"
						onClick={() => signOut()}
					>
						ログアウト
					</button>
				) : (
					<button
						type="submit"
						className="bg-blue-700 py-1 px-3 rounded-full font-bold
             hover:bg-blue-500 hover:shadow-md
             transition-all duration-200 ease-in-out
             active:scale-95"
						onClick={() => signIn('github')}
					>
						ログイン
					</button>
				)}
			</div>
		</header>
	)
}
