<script lang="ts">
	interface Menu {
		name: string;
		href: string;
	}

	const menu: Menu[] = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Blog',
			href: '/blog'
		}
	];
</script>

<header class="sticky top-0 z-10 h-16 bg-opacity-50 bg-neutral">
	<div class="container max-w-screen-lg mx-auto">
		<nav class="flex items-center justify-center py-4">
			<ul class="flex flex-row items-center justify-center gap-12">
				{#each menu as item}
					<li>
						<a href={item.href} class="lowercase link link-hover"> {item.name} </a>
					</li>
				{/each}
				<li>
					<a
						href="https://twitter.com/mathewcst"
						class="lowercase link link-hover"
						target="_blank"
						rel="noreferrer"
					>
						contact
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
