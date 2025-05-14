<script lang="ts">
	import type { Section } from '$lib/types';
	import DeleteIcon from '$lib/assets/cross-icon.svg?component';
	import AddIcon from '$lib/assets/plus-icon.svg?component';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$lib/paraglide/messages';

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

<Card class="p-4">
	<div class="pb-2">
		{#if isEditing}
			<Input class="font-medium" type="text" bind:value={section.name} />
		{:else}
			<h2 class="text-md font-bold text-center">{section.name}</h2>
		{/if}
	</div>
	<div class="flex flex-col gap-2 mb-2">
		{#each section.items as item}
			<div class="flex justify-between items-center gap-2 w-full">
				{#if isEditing}
					<Input bind:value={item.name} />
					<Button variant="ghost" size="sm" Icon={DeleteIcon} onclick={() => deleteItem(item.name)} />
				{:else}
					<div>{item.name}</div>
				{/if}
			</div>
		{/each}
	</div>
	{#if isEditing && !showAddItemInput}
		<Button variant="ghost" size="sm" Icon={AddIcon} onclick={() => (showAddItemInput = true)}>{m.add_item_action()}</Button>
	{/if}
	{#if showAddItemInput}
		<form class="" onsubmit={addItem}>
			<input placeholder={m.item_name_placeholder()} bind:value={newItemName} />
			<Button variant="ghost" size="sm" Icon={AddIcon} type="submit" />
		</form>
	{/if}
</Card>
