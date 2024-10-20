<script lang="ts">
	import { fade } from 'svelte/transition';
	import { focusAction, tooltipAction } from 'svelte-legos';
	import { tick } from 'svelte';
	import Icon from './assets';
	export let initialIndex: number;
	export let opened = false;
	export let urls: string[];

	$: imgIndex = initialIndex;
	$: [hasPrevious, hasNext] = [imgIndex > 0, imgIndex < urls.length - 1];
	const scaleOriginCenter = { x: 0.5, y: 0.5 };
	let url = urls[imgIndex];
	let cursorVisible = false;
	let cursorTimeout: ReturnType<typeof setTimeout>;
	let scale = 1;
	let scaleOrigin = scaleOriginCenter;
	let scaleInputFocused = false;

	async function toNextImage() {
		await tick();
		if (imgIndex >= urls.length - 1) return;
		imgIndex += 1;
	}

	async function toPreviousImage() {
		await tick();
		if (imgIndex <= 0) return;
		imgIndex -= 1;
	}

	const scaleInputAction = (node: HTMLInputElement) => {
		node.select();
		node.addEventListener('keydown', (e) => e.key === 'Enter' && node.blur());
		node.addEventListener('blur', () => (scaleInputFocused = false));
	};

	const scaleActionOnBlur = (node: HTMLInputElement) => {
		const handleSetScale = () => {
			if (node.value !== '') {
				scale = clampScale(Math.floor(+node.value) / 100);
				if (scale < 1) {
					scaleOrigin = scaleOriginCenter;
				}
			}
			node.value = `${scale * 100}`;
		};
		node.addEventListener('blur', handleSetScale);
	};
	const zoomInOutActionOnClick = (node: HTMLElement) => {
		const handleZoomInOutOnClick = ({ clientX, clientY }: MouseEvent) => {
			if (scale === 1) {
				scale = 1.5;
				const { width, height, top, left } = node.getBoundingClientRect();
				const [relativeX, relativeY] = [clientX - left, clientY - top];
				scaleOrigin = { x: relativeX / width, y: relativeY / height };
			} else {
				scale = 1;
			}
		};
		node.addEventListener('click', handleZoomInOutOnClick);
	};
	const handleHideCursorOnMouseStop = (e: MouseEvent) => {
		if (!cursorVisible) {
			cursorVisible = true;
		}
		clearTimeout(cursorTimeout);
		cursorTimeout = setTimeout(() => {
			cursorVisible = false;
		}, 3000);
	};

	function handleDownloadLoading() {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.onload = function () {
			const blob = xhr.response;
			const link = document.createElement('a');
			link.href = window.URL.createObjectURL(blob);
			link.download = '';
			link.click();
			window.URL.revokeObjectURL(link.href);
		};
		xhr.send();
	}

	function clampScale(value: number) {
		return Math.max(0.5, Math.min(value, 2));
	}

	function scaleUp() {
		let changedScale = scale + 0.5;
		if (changedScale >= 1.75) {
			scale = 2;
		} else if (changedScale >= 1.25) {
			scale = 1.5;
		} else if (changedScale >= 0.75) {
			scale = 1;
		}
	}
	function scaleDown() {
		const changedScale = scale - 0.5;
		if (changedScale <= 0.75) {
			scale = 0.5;
		} else if (changedScale <= 1.25) {
			scale = 1;
		} else if (changedScale <= 1.75) {
			scale = 1.5;
		}
	}

	$: {
		[opened];
		onExitEffect();
	}
	$: {
		[scale];
		scaleUnderOneEffect();
	}
	function scaleUnderOneEffect() {
		if (scale < 1) {
			scaleOrigin = scaleOriginCenter;
		}
	}
	function onExitEffect() {
		if (!opened) {
			scaleOrigin = scaleOriginCenter;
			scale = 1;
			imgIndex = initialIndex;
		}
	}

	$: {
		[imgIndex];
		imgIndexChangeEffect();
	}
	function imgIndexChangeEffect() {
		scale = 1;
		url = urls[imgIndex];
	}
	const handleKeyDownOnOpened = (e: KeyboardEvent) => {
		if (!opened) return;

		if (e.key === 'Escape') {
			opened = false;
			return;
		}

		if (['+', '='].includes(e.key)) {
			scaleUp();
			return;
		}

		if (['-', '_'].includes(e.key)) {
			scaleDown();
			return;
		}

		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			toPreviousImage();
			return;
		}

		if (e.key === 'ArrowRight') {
			e.preventDefault();
			toNextImage();
			return;
		}
	};
</script>

<svelte:window on:keydown={handleKeyDownOnOpened} />

<button aria-haspopup="dialog" class="notion-viewer-opener" on:click={() => (opened = true)}>
	<slot />
</button>

{#if opened}
	<div
		role="dialog"
		aria-modal="true"
		on:mousemove={handleHideCursorOnMouseStop}
		use:focusAction={opened}
		transition:fade={{ duration: 200 }}
		class:hide-cursor={!cursorVisible}
		class="notion-viewer-container"
	>
		<button on:click={() => (opened = false)} class="notion-viewer-overlay" />
		{#key url}
			<img
				use:zoomInOutActionOnClick
				style="transform: scale({scale}); transform-origin: {scaleOrigin.x * 100}% {scaleOrigin.y *
					100}%;"
				class:hide-cursor={!cursorVisible}
				src={url}
				alt="posting img"
			/>
		{/key}

		<div class="tools">
			<nav>
				<button
					use:tooltipAction={{
						content: '뒤로',
						pointer: false,
						placement: 'left'
					}}
					aria-label="previous"
					on:click={toPreviousImage}
					class:disabled={!hasPrevious}
				>
					<img src={Icon.ArrowBack} alt="arrow_back" />
				</button>
				<button
					aria-label="next"
					use:tooltipAction={{
						content: '다음',
						pointer: false,
						placement: 'left'
					}}
					on:click={toNextImage}
					class:disabled={!hasNext}
				>
					<img src={Icon.ArrowForward} alt="arrow_forward" />
				</button>
			</nav>
			<div class="scaler">
				<button
					use:tooltipAction={{ content: '축소 -', placement: 'left' }}
					aria-label="scale-down"
					class:disabled={scale <= 0.5}
					on:click={scaleDown}
				>
					<img src={Icon.Minus} alt="minus" />
				</button>

				{#if scaleInputFocused}
					<div class="scaler-input" id="scaler-input">
						<input
							id="scaler-input"
							type="number"
							value={scale * 100}
							use:focusAction={scaleInputFocused}
							use:scaleActionOnBlur
							use:scaleInputAction
						/>
						<span style="cursor: default;">%</span>
					</div>
				{:else}
					<button
						on:click={() => (scaleInputFocused = true)}
						class="scaler-input"
						id="scaler-input"
					>
						<span>{scale * 100}%</span>
					</button>
				{/if}
				<button
					aria-label="scale-up"
					use:tooltipAction={{ content: '확대 +', placement: 'left', pointer: false }}
					class:disabled={scale >= 2}
					on:click={scaleUp}
				>
					<img src={Icon.Plus} alt="plus" />
				</button>
			</div>
			<button
				use:tooltipAction={{ content: '다운로드', placement: 'left', pointer: false }}
				class="download"
				aria-label="download"
				on:click={handleDownloadLoading}
			>
				<img src={Icon.Download} alt="download" />
			</button>
			<button
				aria-label="close"
				use:tooltipAction={{ content: '닫기 esc', placement: 'left', pointer: false }}
				class="close"
				on:click={() => (opened = false)}
			>
				<img src={Icon.Close} alt="close" />
			</button>
		</div>
	</div>
{/if}

<style>
	.tools button {
		background-color: rgba(0, 0, 0, 0.4);
		padding: 6px;
		width: 32px;
		height: 32px;
		border: 0;
		margin: 0;
		user-select: none;
	}
	.tools button.disabled {
		opacity: 0.5;
		pointer-events: none;
		cursor: default;
	}
	.tools button:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
	.tools > nav {
		display: flex;
		margin-right: 12px;
	}
	.tools > nav > button:first-child {
		width: 36px;
		padding-left: 8px;
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	.tools > nav > button:last-child {
		width: 36px;
		padding-right: 8px;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	.tools > .scaler > button:first-child {
		width: 36px;
		padding-left: 8px;
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	.tools .scaler {
		display: flex;
		font-size: 14px;
	}
	.tools .scaler > .scaler-input {
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #888888;
		padding: 0px;
		width: 48px;
	}
	.tools .scaler > .scaler-input:hover {
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
	}

	.tools .scaler input {
		background-color: transparent;
		border: 0;
		font-size: inherit;
		color: inherit;
		padding: 0px;
		padding-top: 1px;
		overflow: hidden;
		line-height: 1;
		text-align: center;
	}
	.tools .scaler input:focus {
		color: white;
		outline: 1px solid #008080;
		width: 28px;
	}
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
	.tools .scaler > button:first-of-type {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.tools .scaler > button:last-of-type {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.tools button > img {
		width: 100%;
		height: 100%;
	}
	.tools button.download {
		border-left: solid 1px gray;
		border-right: solid 1px gray;
		margin: 0px 1px;
	}
	.tools button.close {
		width: 36px;
		padding-right: 8px;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	.tools button:not(:disabled) {
		cursor: pointer;
	}
	.hide-cursor {
		cursor: none !important;
	}
	.notion-viewer-opener {
		cursor: pointer;
	}

	.notion-viewer-container {
		display: flex;
		position: fixed;
		width: 100vw;
		height: 100vh;
		inset: 0;
		overflow: hidden;
		z-index: 999;
		justify-content: center;
		align-items: center;
		padding-top: 32px;
		padding-bottom: 32px;
		flex-direction: column;
	}

	@media screen and (min-width: 768px) {
		.notion-viewer-container {
			padding-left: 32px;
			padding-right: 32px;
		}
	}

	.notion-viewer-overlay {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background-color: black;
		opacity: 0.8;
		cursor: default;
	}

	.notion-viewer-container > img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		position: relative;
		z-index: 0;
		pointer-events: auto;
		cursor: zoom-in;
		transition: transform 0.2s ease;
		user-select: none;
	}

	.notion-viewer-opener > img {
	}

	.tools {
		display: flex;
		position: absolute;
		bottom: 32px;
		left: 50%;
		transform: translateX(-50%);
	}

	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		width: auto;
		height: auto;
		overflow: visible;
		text-align: left;
		color: inherit;
		font: inherit;
		line-height: normal;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
		-webkit-appearance: none;
		appearance: none;
	}
</style>
