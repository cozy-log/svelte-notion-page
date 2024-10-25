<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="notion-column">
	{@render children?.()}
</div>
<div class="notion-column-spacer"></div>

<style>
	.notion-column {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 2px;
		padding-top: 16px;
		padding-bottom: 16px;
	}

	.notion-column-spacer {
		width: 46px;
	}

	.notion-column-spacer:last-child {
		display: none;
	}

	@media (max-width: 640px) {
		.notion-column {
			padding-top: 0px;
			padding-bottom: 0px;
		}
	}
</style>
