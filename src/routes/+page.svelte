<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$/lib/components/Container.svelte';
	import PostList from '$/lib/components/Posts/PostList.svelte';
	import Icon from '@iconify/svelte';

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

			<ul class="flex flex-row items-start justify-center gap-4 my-2">
				<li>
					<a
						href="https://twitter.com/mathewcst"
						target="_blank"
						rel="noreferrer"
						class="btn btn-sm btn-circle btn-ghost"
					>
						<Icon icon="mdi:twitter" class="text-xl" />
					</a>
				</li>
				<li>
					<a
						href="https://twitch.tv/mathewcst"
						target="_blank"
						rel="noreferrer"
						class="btn btn-sm btn-circle btn-ghost"
					>
						<Icon icon="mdi:twitch" class="text-xl" />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/mathewcst"
						target="_blank"
						rel="noreferrer"
						class="btn btn-sm btn-circle btn-ghost"
					>
						<Icon icon="mdi:github" class="text-xl" />
					</a>
				</li>
			</ul>

			<p class="mt-8 text-base-content">Here are some stuff I've blogged about:</p>

			<PostList {posts} show_blog_link={true} />
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
