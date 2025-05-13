<script lang="ts">
	import { listSavedChecklists } from '$lib/storage';
	import type { SavedChecklist } from '$lib/types';
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '$lib/components/ui/card';
	import { formatDate } from '$lib/utils';
	let checklists = $state<SavedChecklist[]>([]);

	onMount(() => {
		checklists = listSavedChecklists();
	});

    function calcProgress(checklist: SavedChecklist) {
        const totalItems = checklist.sections.reduce((acc, section) => acc + section.items.length, 0);
        const checkedItems = checklist.sections.reduce((acc, section) => acc + section.items.filter((item) => item.checked).length, 0);
        return Math.round((checkedItems / totalItems) * 100);
    }
</script>

<div class="mt-8 flex flex-col gap-4">
	{#each checklists as checklist}
		<a href={`/checklists/${checklist.id}`}>
			<Card>
				<CardHeader>
					<CardTitle>{checklist.name}</CardTitle>
                    <CardDescription>Packed {calcProgress(checklist)}% of items</CardDescription>
				</CardHeader>
				<CardContent class="-mt-4">
					<p class="text-sm text-gray-500">Created on {formatDate(checklist.date)}</p>
				</CardContent>
			</Card>
		</a>
	{/each}
</div>
