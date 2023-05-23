<script lang="ts">
	import '$/app.css';

	// Supports weights 300-700
	import '@fontsource-variable/fira-code';

	import Header from './components/Header.svelte';
</script>

<div id="app" class="h-screen bg-neutral">
	<Header />

	<main>
		<slot />
	</main>
</div>
