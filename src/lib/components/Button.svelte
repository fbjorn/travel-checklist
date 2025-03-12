<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	let {
		Icon = undefined,
		children = undefined,
		onclick = undefined,
		type = 'button',
		kind = 'ghost'
	}: {
		Icon?: Component;
		children?: Snippet;
		onclick?: () => void;
		type?: 'button' | 'submit';
		kind?: 'ghost' | 'primary';
	} = $props();

	const iconOnly = $derived(Icon && !children);
</script>

<button
	class:icon-only={iconOnly}
	{onclick}
	{type}
	class:ghost={kind === 'ghost'}
	class:primary={kind === 'primary'}
>
	{#if Icon}
		<Icon />
	{/if}
	{#if children}
		<span>{@render children()}</span>
	{/if}
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		background-color: #fff;

		&.primary {
			border: 1px solid #5b5793;

			&:hover {
				background-color: #4a477d;
				color: #fff;
			}
		}

		&:hover {
			background-color: #f0f0f0;
			cursor: pointer;
		}

		&.icon-only {
			padding: 0.125rem;
		}

		:global(svg) {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
