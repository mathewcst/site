import type { Post } from '$/lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const { slug } = params

	const response = await fetch('../../api/posts')
	const posts: Post[] = await response.json()

	const posts_from_category = posts.filter(post => {
		if (post.categories.includes(slug)) return post
	})


	return {
		posts: posts_from_category,
		category: slug
	}
}
