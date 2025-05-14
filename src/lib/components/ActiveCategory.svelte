<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { SavedChecklistSection } from '$lib/types';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import { cn } from '$lib/utils';
	import DeleteIcon from '$lib/assets/cross-icon.svg?component';
	import AddIcon from '$lib/assets/plus-icon.svg?component';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$lib/paraglide/messages';

	type Item = {
		name: string;
		checked: boolean;
	};

	const {
		section = $bindable<SavedChecklistSection>(),
		isEditing = $bindable(true),
		oncheck
	}: { section: SavedChecklistSection; isEditing: boolean; oncheck: () => void } = $props();

	let collapsed = $state(section.items.filter((item) => !item.checked).length === 0);
	let newItemName = $state('');
	let showAddItemInput = $state(false);

	const checkedCount = $derived(section.items.filter((item: Item) => item.checked).length);
	const totalCount = $derived(section.items.length);
	const progress = $derived(totalCount ? Math.round((checkedCount / totalCount) * 100) : 0);

	function addItem(e: Event) {
		e.preventDefault();
		section.items.push({ name: newItemName, checked: false });
		newItemName = '';
		showAddItemInput = false;
		if (oncheck) oncheck();
	}

	function deleteItem(itemName: string) {
		section.items = section.items.filter((item) => item.name !== itemName);
		if (oncheck) oncheck();
	}
</script>

<div class="bg-white rounded-lg shadow-md p-4 mb-4">
	<button class="flex flex-col cursor-pointer w-full" onclick={() => (collapsed = !collapsed)}>
		<div class="flex items-center justify-between gap-2">
			<div class="flex items-center gap-2">
				{#if isEditing}
					<Input class="font-semibold mb-1" type="text" bind:value={section.name} 
                    onclick={(e) => e.stopPropagation()}
                    />
				{:else}
					<h2 class="text-lg font-semibold">{section.name}</h2>
				{/if}
				<span class="text-sm text-gray-500">({checkedCount}/{totalCount})</span>
			</div>
			<ChevronUp class="w-5 h-5 transition-transform {!collapsed ? '' : 'rotate-180'}" />
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2">
			<div
				class="h-2 rounded-full {progress === 100 ? 'bg-green-500' : 'bg-blue-500'}"
				style="width: {progress}%"
			></div>
		</div>
	</button>

	{#if !collapsed}
		<div transition:slide={{ duration: 300 }} class="mt-4">
			<ul class="space-y-2">
				{#each section.items as item}
					<li class="flex items-center gap-2">
						{#if isEditing}
							<div class="flex justify-between items-center gap-2 w-full">
								<Input bind:value={item.name} />
								<Button variant="ghost" size="sm" Icon={DeleteIcon} onclick={() => deleteItem(item.name)} />
							</div>
						{:else}
                        <div class="flex items-center gap-2 my-1 w-full">
							<Checkbox
								id={`${section.name}-${item.name}`}
								bind:checked={item.checked}
								onCheckedChange={oncheck}
							/>
							<Label
								for={`${section.name}-${item.name}`}
								class={cn(
									'leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full',
									item.checked ? 'line-through text-gray-500' : ''
								)}
							>
								{item.name}
							</Label>
                        </div>
						{/if}
					</li>
				{/each}
			</ul>
			
			{#if isEditing && !showAddItemInput}
				<div class="mt-4">
					<Button variant="ghost" size="sm" Icon={AddIcon} onclick={() => (showAddItemInput = true)}>{m.add_item_action()}</Button>
				</div>
			{/if}
			
			{#if showAddItemInput}
				<form class="mt-4" onsubmit={addItem}>
					<div class="flex items-center gap-2">
						<Input placeholder={m.item_name_placeholder()} bind:value={newItemName} />
						<Button variant="ghost" size="sm" Icon={AddIcon} type="submit" />
					</div>
				</form>
			{/if}
		</div>
	{/if}
</div>
