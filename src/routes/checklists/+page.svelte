<script lang="ts">
	import { deleteChecklist, listSavedChecklists } from '$lib/storage';
	import type { SavedChecklist } from '$lib/types';
	import { onMount } from 'svelte';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardContent,
		CardDescription
	} from '$lib/components/ui/card';
	import { formatDate } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import Trash from '@lucide/svelte/icons/trash';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import * as m from '$lib/paraglide/messages';

	let checklists = $state<SavedChecklist[]>([]);
	let openDeleteDialog = $state(false);
	let checklistToDelete = $state<SavedChecklist | null>(null);

	onMount(() => {
		checklists = listSavedChecklists();
	});

	function calcProgress(checklist: SavedChecklist) {
		const totalItems = checklist.sections.reduce((acc, section) => acc + section.items.length, 0);
		const checkedItems = checklist.sections.reduce(
			(acc, section) => acc + section.items.filter((item) => item.checked).length,
			0
		);
		return Math.round((checkedItems / totalItems) * 100);
	}

	function onDeleteClick(event: MouseEvent, checklist: SavedChecklist) {
		event.preventDefault();
		openDeleteDialog = true;
		checklistToDelete = checklist;
	}

	function onDeleteConfirm() {
		if (checklistToDelete) {
			deleteChecklist(checklistToDelete.id);
			openDeleteDialog = false;
			checklistToDelete = null;
			checklists = listSavedChecklists();
		}
	}
</script>

<div class="mt-8 flex flex-col gap-4">
	{#if checklists.length === 0}
		<div class="text-gray-500 mx-auto">{m.no_checklists_found()}</div>
	{/if}
	{#each checklists as checklist}
		<a href={`/checklists/edit?id=${checklist.id}`}>
			<Card class="flex justify-between items-center p-4">
				<div>
					<CardTitle class="mb-2">{checklist.name}</CardTitle>
					<CardDescription>{m.packed_percentage({ percentage: calcProgress(checklist) })}</CardDescription>
                    <CardDescription>{m.created_on({ date: formatDate(checklist.date) })}</CardDescription>
				</div>
				<Button variant="outline" size="icon" Icon={Trash} onclick={(e) => onDeleteClick(e, checklist)} />
			</Card>
		</a>
	{/each}
</div>

<AlertDialog.Root bind:open={openDeleteDialog}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>{m.remove_checklist({ name: checklistToDelete?.name ?? '' })}</AlertDialog.Title>
			<AlertDialog.Description>{m.action_cannot_be_undone()}</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>{m.cancel()}</AlertDialog.Cancel>
			<AlertDialog.Action onclick={onDeleteConfirm}>{m.continue_action()}</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
