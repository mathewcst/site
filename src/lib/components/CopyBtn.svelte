<script lang="ts">
	import Icon from '@iconify/svelte';

	export let code: string | null;

	let is_copied = false;

	const copyToClipboard = () => {
		if (navigator.clipboard && code) {
			navigator.clipboard.writeText(code);
			is_copied = true;
		}
	};

	$: if (is_copied) {
		setTimeout(() => {
			is_copied = false;
		}, 1000);
	}
</script>

<button
	class="absolute btn btn-sm btn-square btn-ghost top-1 right-1"
	class:bg-success={is_copied}
	class:text-white={is_copied}
	on:click={copyToClipboard}
>
	<Icon icon="mdi:content-copy" class="text-lg" />
</button>
