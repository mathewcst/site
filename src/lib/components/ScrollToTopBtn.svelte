<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	onMount(() => {
		// Check if page is scrolled
		const checkScroll = () => {
			const back_to_top = document.querySelector('.back-to-top') as HTMLElement;
			if (window.scrollY > 0) {
				back_to_top.classList.remove('hidden');
			} else {
				back_to_top.classList.add('hidden');
			}
		};

		// Add event listener to scroll
		window.addEventListener('scroll', checkScroll);
	});
</script>

<div class="hidden back-to-top">
	<button class="fixed bottom-4 right-8 btn btn-square btn-secondary" on:click={scrollToTop}>
		<Icon icon="mdi:chevron-up" class="text-xl" />
	</button>
</div>
