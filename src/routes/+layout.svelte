<script lang="ts">
	import '$/app.css';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	// Supports weights 300-700
	import '@fontsource-variable/fira-code';

	import Header from './components/Header.svelte';
	import Transition from './components/Transition.svelte';
</script>

<div id="app" class="min-h-screen overflow-y-scroll">
	<Header />

	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>
</div>
