<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div
		class="h-full overflow-hidden transition-all duration-200"
		in:fly={{ y: -50, duration: 200, delay: 250 }}
		out:fly={{ y: 50, duration: 200 }}
	>
		<slot />
	</div>
{/key}
