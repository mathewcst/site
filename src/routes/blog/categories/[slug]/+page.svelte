<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$/lib/components/Container.svelte';
	import PostList from '$/lib/components/Posts/PostList.svelte';

	const { posts, category } = data;
</script>

<Container class="flex flex-col items-stretch justify-evenly">
	<h1 class="text-4xl font-bold uppercase">Category: {category}</h1>

	<PostList {posts} show_blog_link={false} />
</Container>
