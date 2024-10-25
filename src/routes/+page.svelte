<script lang="ts">
	/**
	 * this is for getting notion data
	 */
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	onMount(async () => {
		console.log(data.page);
	});
</script>
