<script lang="ts">
	import { getChecklist, updateChecklist } from '$lib/storage';
	import type { SavedChecklist } from '$lib/types';
	import { onMount } from 'svelte';
	import ActiveCategory from '$lib/components/ActiveCategory.svelte';
	import { formatDate } from '$lib/utils';
	import { page } from '$app/stores';

	const { id } = $page.params;

	let checklist = $state<SavedChecklist | undefined>(undefined);

	onMount(() => {
		checklist = getChecklist(id);
	});

	function onCheck () {
		updateChecklist(id, checklist);
	}
	
</script>

{#if checklist}
	<div class="py-8">
		<div class="mb-6">
			<h1 class="text-3xl font-bold text-gray-900">{checklist.name}</h1>
			<p class="text-gray-600 mt-1">Created on {formatDate(checklist.date)}</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each checklist.sections as _, index}
				<ActiveCategory 
					bind:section={checklist.sections[index]}
					oncheck={onCheck}
				/>
			{/each}
		</div>
	</div>
{:else}
	<div class="flex justify-center items-center h-screen">
		<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
	</div>
{/if}
