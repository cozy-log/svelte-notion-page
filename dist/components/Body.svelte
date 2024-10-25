<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<article class="notion-body">
	{@render children?.()}
</article>

<style>
	.notion-body {
		width: 100%;
		max-width: var(--notion-max-width);
		margin-left: auto;
		margin-right: auto;
		padding: 0px 4px;
	}
</style>
