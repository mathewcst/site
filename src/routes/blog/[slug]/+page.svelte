<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$/lib/components/Container.svelte';
	import CategoriesTag from '$/lib/components/Posts/CategoriesTag.svelte';
	import ScrollToTopBtn from '$/lib/components/ScrollToTopBtn.svelte';
	import { formatDate } from '$/lib/utils';

	const { content, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={metadata.date} />
</svelte:head>

<article>
	<Container class="flex flex-col items-center justify-center">
		<p>{formatDate(metadata.date)}</p>
		<h1 class="my-4 text-4xl text-secondary">{metadata.title}</h1>
		<h2>{metadata.description}</h2>

		<CategoriesTag categories={metadata.categories} />

		<div class="prose">
			<svelte:component this={content} />
		</div>
	</Container>

	<ScrollToTopBtn />
</article>
