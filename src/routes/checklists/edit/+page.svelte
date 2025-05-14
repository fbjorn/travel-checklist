<script lang="ts">
	import { getChecklist, updateChecklist } from '$lib/storage';
	import type { SavedChecklist } from '$lib/types';
	import { onMount } from 'svelte';
	import ActiveCategory from '$lib/components/ActiveCategory.svelte';
	import { formatDate } from '$lib/utils';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import EditIcon from '@lucide/svelte/icons/edit';
	import SaveIcon from '@lucide/svelte/icons/save';
	import * as m from '$lib/paraglide/messages';

	import { Input } from '$lib/components/ui/input';
	let checklist = $state<SavedChecklist | undefined>(undefined);
	let isEditing = $state(false);

	onMount(() => {
		const params = $page.url.searchParams;
		const id = params.get('id') || '';
		checklist = getChecklist(id);
	});

	function onCheck() {
		if (checklist) {
			updateChecklist(checklist);
		}
	}

	function onEditToggle() {
		if (isEditing && checklist) {
			updateChecklist(checklist);
		}
		isEditing = !isEditing;
	}
</script>

{#if checklist}
	<div class="py-8">
		<div class="mb-6">
			{#if isEditing}
				<Input class="font-medium" type="text" bind:value={checklist.name} />
			{:else}
				<h1 class="text-3xl font-bold text-gray-900">{checklist.name}</h1>
			{/if}
			<p class="text-gray-600 mt-1">{m.created_on({ date: formatDate(checklist.date) })}</p>
				<Button
					variant={isEditing ? 'secondary' : 'outline'}
					Icon={isEditing ? SaveIcon : EditIcon}
					onclick={onEditToggle}
					class="mt-4"
				>
					{isEditing ? m.save_action() : m.edit_action()}
				</Button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each checklist.sections as _, index}
				<ActiveCategory bind:section={checklist.sections[index]} oncheck={onCheck} {isEditing} />
			{/each}
		</div>
	</div>
{:else}
	<div class="flex justify-center items-center h-screen">
		<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
	</div>
{/if}
