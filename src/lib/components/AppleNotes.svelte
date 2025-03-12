<script lang="ts">
	import AppleNotesIcon from '$lib/assets/apple-notes.svg?component';
	import { exportToAppleNotes } from '$lib/exporters';
	import type { Checklist } from '$lib/types';

	let { checklist }: { checklist: Checklist } = $props();

	async function exportChecklist() {
		await navigator.share({
			title: checklist.name,
			text: exportToAppleNotes(checklist)
		});
	}
</script>

<button class="apple-notes" onclick={exportChecklist}>
	<AppleNotesIcon />
	<span>Notes</span>
</button>

<style lang="scss">
	.apple-notes {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;

		&:hover {
			background-color: #e6e5d8;
		}

		:global(svg) {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
</style>
