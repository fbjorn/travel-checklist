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
		<div class="text-gray-500 mx-auto">No checklists found</div>
	{/if}
	{#each checklists as checklist}
		<a href={`/checklists/edit?id=${checklist.id}`}>
			<Card class="flex justify-between items-center p-4">
				<div>
					<CardTitle>{checklist.name}</CardTitle>
					<CardDescription>Packed {calcProgress(checklist)}% items</CardDescription>
					<p class="text-sm text-gray-500">Created on {formatDate(checklist.date)}</p>
				</div>
				<Button variant="outline" Icon={Trash} onclick={(e) => onDeleteClick(e, checklist)} />
			</Card>
		</a>
	{/each}
</div>

<AlertDialog.Root bind:open={openDeleteDialog}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Remove {checklistToDelete?.name}?</AlertDialog.Title>
			<AlertDialog.Description>This action cannot be undone</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action onclick={onDeleteConfirm}>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
