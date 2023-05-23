<script lang="ts">
	import Container from '$/lib/components/Container.svelte';
</script>

<svelte:head>
	<title>Matheus Costa | Indie Developer</title>
</svelte:head>

<Container class="flex flex-col items-center justify-center py-8 sm:py-32 sm:items-start">
	<div class="order-1">
		<h1 class="text-4xl">Hi👋, I'm Mathew</h1>
		<p class="text-xl">and I make stuff...</p>
	</div>

	<div class="relative sm:absolute sm:top-4 sm:right-8 pic order-0">
		<img src="/images/avatar.webp" alt="Matheus Costa" width="500" height="500" />
	</div>
</Container>

<div class="py-4">
	<Container class="flex flex-col items-center justify-center sm:items-start">
		<p class="text-base-content">Here are some stuff</p>
	</Container>
</div>
