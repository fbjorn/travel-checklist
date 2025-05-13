<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { SavedChecklistSection } from '$lib/types';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import { cn } from '$lib/utils';

	type Item = {
		name: string;
		checked: boolean;
	};

	const {
		section = $bindable<SavedChecklistSection>(),
		oncheck
	}: { section: SavedChecklistSection; oncheck: () => void } = $props();

	let collapsed = $state(false);

	const checkedCount = $derived(section.items.filter((item: Item) => item.checked).length);
	const totalCount = $derived(section.items.length);
	const progress = $derived(totalCount ? Math.round((checkedCount / totalCount) * 100) : 0);
</script>

<div class="bg-white rounded-lg shadow-md p-4 mb-4">
	<button class="flex flex-col cursor-pointer w-full" onclick={() => (collapsed = !collapsed)}>
		<div class="flex items-center justify-between gap-2">
			<div class="flex items-center gap-2">
				<h2 class="text-lg font-semibold">{section.name}</h2>
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
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
