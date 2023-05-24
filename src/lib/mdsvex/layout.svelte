<script lang="ts" context="module">
	import { img } from './components';
	export { img };
</script>

<script lang="ts">
	import { copy_clipboard } from '../utils';
</script>

<div use:copy_clipboard>
	<slot />
</div>
