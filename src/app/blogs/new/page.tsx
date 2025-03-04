import NewForm from '@/components/newForm'
import { authOptions } from '@/lib/next-auth/auth.config'
import { getServerSession } from 'next-auth'

const NewBlogPage = async () => {
	const session = await getServerSession(authOptions)

	if (!session) {
		return <div>ログインしてください。</div>
	}

	return (
		<div>
			<NewForm />
		</div>
	)
}

export default NewBlogPage
