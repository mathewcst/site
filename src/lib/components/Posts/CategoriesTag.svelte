<script lang="ts">
	export let categories: string[];
</script>

{#if categories.length > 0}
	<ul class="flex flex-row gap-4 my-4">
		{#each categories as category}
			<li>
				<a class="p-2 rounded-lg bg-base-100" href="/blog/categories/{category}">#{category}</a>
			</li>
		{/each}
	</ul>
{/if}
