<script lang="ts">
	import type { Post } from '$/lib/types';
	import { formatDate } from '$/lib/utils';
	import CategoriesTag from './CategoriesTag.svelte';

	export let post: Post;
</script>

<a href="/blog/{post.slug}">
	<div class="w-full p-4 bg-base-200">
		<p class="text-sm italic">{formatDate(post.date)}</p>
		<h3 class="my-2 text-2xl text-secondary">{post.title}</h3>
		<h2>{post.description}</h2>

		<CategoriesTag categories={post.categories} />
	</div>
</a>
