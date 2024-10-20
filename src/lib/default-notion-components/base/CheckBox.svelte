<script lang="ts">
	export let checked: boolean = false;
</script>

<div
	class:notion-property-checkbox-checked={checked}
	class:notion-property-checkbox-unchecked={!checked}
	class="notion-property-checkbox"
>
	{#if checked}
		<svg
			viewBox="-1 -1 14 14"
			class="check"
			style="width: 12px; height: 12px; display: block; flex-shrink: 0; backface-visibility: hidden; fill: white;"
			><polygon
				points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
			/></svg
		>
	{:else}
		<svg
			viewBox="0 0 16 16"
			class="checkboxSquare"
			style="width: 100%; height: 100%; display: block; flex-shrink: 0; backface-visibility: hidden;"
		>
			<path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
		</svg>
	{/if}
</div>

<style>
	.notion-property-checkbox {
		width: 16px;
		height: 16px;
	}

	.notion-property-checkbox-checked {
		width: 16px;
		height: 16px;
		background: var(--select-color-0);
	}

	.notion-property-checkbox-checked svg {
		position: relative;
		display: block;
		top: 1px;
		left: 1px;
		width: 14px;
		height: 14px;
		fill: #fff;
	}

	.notion-property-checkbox-unchecked {
		width: 16px;
		height: 16px;
	}

	.notion-property-checkbox-unchecked svg {
		fill: var(--fg-color);
	}
</style>
