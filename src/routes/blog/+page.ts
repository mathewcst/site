import type { Post } from '$/lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()

	const categories: string[] = []

	posts.map((post: Post) => {
		post.categories.forEach(category => {
			if (!categories.includes(category)) {
				categories.push(category)
			}
		})

	})

	return {
		posts,
		categories
	}
}
