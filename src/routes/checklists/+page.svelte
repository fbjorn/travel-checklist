<script lang="ts">
	import { listSavedChecklists } from '$lib/storage';
	import type { SavedChecklist } from '$lib/types';
	import { onMount } from 'svelte';

	let checklists = $state<SavedChecklist[]>([]);

	onMount(() => {
		checklists = listSavedChecklists();
	});
</script>

<div class="mt-8">
	<h1>Checklists</h1>

	{#each checklists as checklist}
		<div class="flex justify-between items-center">
			<a href={`/checklists/${checklist.id}`}>{checklist.name}</a>
		</div>
	{/each}
</div>