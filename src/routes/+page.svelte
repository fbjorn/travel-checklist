<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Category from '$lib/components/Category.svelte';
	import { AllInOne, makeChecklist, Extras } from '$lib/data/templates';
	import EditIcon from '$lib/assets/edit-icon.svg?component';
	import SEO from '$lib/components/SEO.svelte';
	import type { Extra } from '$lib/types';
	import AppleNotes from '$lib/components/AppleNotes.svelte';

	let isEditing = $state(false);
	let checklist = $state(makeChecklist(AllInOne));

	function addExtra(extra: Extra, index: number) {
		usedExtras[index] = true;
		for (const item of extra.items) {
			const sectionType = item.section ?? extra.defaultSection;
			for (const section of checklist.sections) {
				if (section.type === sectionType) {
					section.items.push({
						name: item.fn()
					});
					break;
				}
			}
		}
	}

	let usedExtras = $state<Record<number, boolean>>({});
</script>

<SEO
	siteName="Travel Checklist"
	description="Create your own checklist for your next trip."
	image="https://vacaychecklist.com/og-image.png"
/>
<div class="container">
	<div class="checklist-name-wrapper">
		<input bind:value={checklist.name} />
	</div>
	<div class="extras">
		{#each Extras as extra, index}
			<button class="extra-btn" disabled={usedExtras[index]} onclick={() => addExtra(extra, index)}>
				{extra.emoji}{' '}{extra.fn()}
			</button>
		{/each}
	</div>
	<div class="edit-wrapper">
		<Button Icon={EditIcon} onclick={() => (isEditing = !isEditing)}>Edit</Button>
	</div>
	<div class="categories">
		{#each checklist.sections as section}
			<Category {section} {isEditing} />
		{/each}
	</div>

	<div class="export">
		<h3>Export</h3>
		<div class="export-buttons">
			<AppleNotes {checklist} />
		</div>
	</div>
</div>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;

	.container {
		display: flex;
		flex-direction: column;
		max-width: 60rem;
		margin: 0 auto;
	}

	.checklist-name-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		margin: 1rem 0;

		input {
			font-family: 'Nunito Variable', sans-serif;
			font-weight: 700;
			width: 20rem;
			font-size: 1.5rem;
			text-align: center;
		}
	}

	.extras {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		margin: 1rem 0;
		flex-wrap: wrap;

		.extra-btn {
			padding: 0.5rem 1rem;
			background-color: #e6e4ca;
			border: none;
			border-radius: 0.5rem;
			cursor: pointer;
			font-weight: 600;
			color: #19163f;

			&:disabled {
				opacity: 0.5;
			}
		}
	}

	.edit-wrapper {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.categories {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;

		@include mobile {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.export {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		margin-top: 2rem;

		.export-buttons {
			display: flex;
			flex-direction: row;
			gap: 1rem;
		}
	}
</style>
