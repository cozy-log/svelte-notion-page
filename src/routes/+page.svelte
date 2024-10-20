<script lang="ts">
	/**
	 * this is for getting notion data
	 */
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(async () => {
		console.log(data.page);
	});
</script>
