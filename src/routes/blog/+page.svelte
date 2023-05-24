<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$/lib/components/Container.svelte';
	import CategoriesTag from '$/lib/components/Posts/CategoriesTag.svelte';
	import PostList from '$/lib/components/Posts/PostList.svelte';

	const { posts, categories } = data;
</script>

<Container class="flex flex-col items-stretch justify-evenly">
	<h1 class="text-4xl font-bold uppercase">Blog</h1>

	<div class="my-4">
		<CategoriesTag {categories} />
	</div>

	<PostList {posts} show_blog_link={false} />
</Container>
