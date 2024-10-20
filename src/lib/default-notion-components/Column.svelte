<script lang="ts">
</script>

<div class="notion-column">
	<slot />
</div>
<div class="notion-column-spacer" />

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
