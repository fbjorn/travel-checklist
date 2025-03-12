<script lang="ts">
	import type { Section } from '$lib/types';
	import DeleteIcon from '$lib/assets/cross-icon.svg?component';
	import AddIcon from '$lib/assets/plus-icon.svg?component';
	import Button from '$lib/components/Button.svelte';

	let { section, isEditing = false }: { section: Section; isEditing: boolean } = $props();

	let newItemName = $state('');
	let showAddItemInput = $state(false);

	function addItem() {
		section.items.push({ name: newItemName });
		newItemName = '';
		showAddItemInput = false;
	}

	function deleteItem(name: string) {
		section.items = section.items.filter((item) => item.name !== name);
	}
</script>

<div class="category">
	<div class="name">
		{#if isEditing}
			<input type="text" bind:value={section.name} />
		{:else}
			<h2>{section.name}</h2>
		{/if}
	</div>
	<div class="items">
		{#each section.items as item}
			<div class="item" class:editing={isEditing}>
				{#if isEditing}
					<input bind:value={item.name} />
					<Button Icon={DeleteIcon} onclick={() => deleteItem(item.name)} />
				{:else}
					<div>{item.name}</div>
				{/if}
			</div>
		{/each}
	</div>
	{#if isEditing && !showAddItemInput}
		<Button Icon={AddIcon} onclick={() => (showAddItemInput = true)}>add</Button>
	{/if}
	{#if showAddItemInput}
		<form class="add-item-form" onsubmit={addItem}>
			<input placeholder="Item name" bind:value={newItemName} />
			<Button Icon={AddIcon} type="submit" />
		</form>
	{/if}
</div>

<style lang="scss">
	.category {
		display: flex;
		flex-direction: column;
		padding: 1rem 0.5rem;
		gap: 0.5rem;
		border-radius: 8px;
		box-shadow: 0 0 10px 1px rgba(84, 57, 147, 0.1);

		.name {
			$font-size: 1.15rem;
			display: flex;
			align-items: center;
			gap: 1rem;

			h2, input {
				font-family: 'Nunito Variable', sans-serif;
				flex: 1;
				text-align: center;
				font-size: $font-size;
				font-weight: 700;
				margin: 0;
			}
		}
	}

	input {
		flex: 1;
	}

	.items {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		.item {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			div {
				padding: 0.25rem;
			}
		}
	}

	.add-item-form {
		display: flex;
		gap: 0.5rem;
	}
</style>
