<script lang="ts">
	import type { Post } from '$/lib/types';
	import PostCard from './PostCard.svelte';

	export let posts: Post[] = [];
	export let show_blog_link = true;
</script>

<div class="flex flex-col w-full gap-2 my-4">
	{#each posts as post}
		<PostCard {post} />
	{/each}

	{#if show_blog_link}
		<a href="/blog" class="mt-4 link">See all posts...</a>
	{/if}
</div>
