<script lang="ts">
	import { getChecklist } from '$lib/storage';
	import type { SavedChecklist } from '$lib/types';
	import { onMount } from 'svelte';

	const { id } = $props();
	let checklist = $state<SavedChecklist | undefined>(undefined);

	onMount(() => {
		checklist = getChecklist(id);
	});
</script>

{#if checklist}
	<div class="container">
		<h1>{checklist.name}</h1>
	</div>
{/if}
