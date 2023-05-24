<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$/lib/components/Container.svelte';
	import { formatDate } from '$/lib/utils';

	const { content, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<article>
	<Container>
		<p>{formatDate(metadata.date)}</p>
		<h1 class="my-4 text-4xl text-secondary">{metadata.title}</h1>
		<h2>{metadata.description}</h2>

		<ul class="flex flex-row gap-4 my-4">
			{#each metadata.categories as category}
				<li class="p-2 rounded-lg bg-base-100">#{category}</li>
			{/each}
		</ul>

		<div class="prose">
			<svelte:component this={content} />
		</div>
	</Container>
</article>
