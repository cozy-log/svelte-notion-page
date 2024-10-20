<script lang="ts">
	export let src: string;
	export let alt: string = 'notion cover';
</script>

<div class="notion-cover-wrapper">
	<img {src} {alt} />
</div>

<style>
	.notion-cover-wrapper {
		width: 100%;
		height: 30vh;
		min-height: 200px;
	}

	img {
		width: 100%;
		height: 100%;
    object-fit: cover;
	}
</style>
