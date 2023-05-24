<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$/lib/components/Container.svelte';
	import { formatDate } from '$/lib/utils';

	const { posts } = data;
</script>

<svelte:head>
	<title>Matheus Costa | Indie Developer</title>
</svelte:head>

<div class="flex flex-col items-center justify-start py-4 sm:items-center content">
	<Container class="flex flex-col items-center justify-center sm:flex-row">
		<div class="flex flex-col items-start justify-center order-1 sm:order-0">
			<h1 class="text-4xl">Hi👋, I'm Mathew,</h1>
			<p class="text-xl">and I make stuff...</p>

			<p class="mt-8 text-base-content">Here are some stuff I've blogged about:</p>

			<div class="flex flex-col w-full max-w-[350px] h-[100px] my-4 gap-2">
				{#each posts as post}
					<a href="/blog/{post.slug}">
						<div class="w-full p-4 bg-base-200">
							<p class="text-sm italic">{formatDate(post.date)}</p>
							<h3 class="my-2 text-2xl text-secondary">{post.title}</h3>
							<p class="text-lg">{post.description}</p>
						</div>
					</a>
				{/each}

				<a href="/blog" class="mt-4 link">See all posts...</a>
			</div>
		</div>

		<div class="relative top-0 sm:top-4 order-0 sm:order-1">
			<img src="/images/avatar.webp" alt="Matheus Costa" width="500" height="500" />
		</div>
	</Container>
</div>

<style>
	.content {
		height: calc(100vh - 64px);
	}
</style>
