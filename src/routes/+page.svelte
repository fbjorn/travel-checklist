<script lang="ts">
	import Category from '$lib/components/Category.svelte';
	import { AllInOne, makeChecklist, Extras } from '$lib/data/templates';
	import EditIcon from '$lib/assets/edit-icon.svg?component';
	import SEO from '$lib/components/SEO.svelte';
	import type { Extra } from '$lib/types';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { saveChecklist } from '$lib/storage';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages';

	let isEditing = $state(false);
	let checklist = $state(makeChecklist(AllInOne));

	function addExtra(extra: Extra, index: number) {
		usedExtras[index] = true;
		for (const item of extra.items) {
			const name = item.fn();
			const sectionType = item.section ?? extra.defaultSection;
			for (const section of checklist.sections) {
				if (section.type === sectionType && !section.items.find((i) => i.name === name)) {
					section.items.push({ name });
					break;
				}
			}
		}
	}

	let usedExtras = $state<Record<number, boolean>>({});

	function save() {
		const id = saveChecklist(checklist);
		goto(`/checklists/edit?id=${id}`);
	}
</script>

<SEO
	siteName="Travel Checklist"
	description="Create your own checklist for your next trip."
	image="https://travel.fbjorn.cc/i/social-media-logo.png"
/>
<div class="container2">
	<div class="flex justify-center mt-10 mb-4">
		<Input class="font-medium max-w-[20rem] text-center md:text-xl" bind:value={checklist.name} />
	</div>
	<div class="extras">
		{#each Extras as extra, index}
			<Button
				class="bg-gradient-to-r from-indigo-500 to-indigo-600"
				disabled={usedExtras[index]}
				onclick={() => addExtra(extra, index)}
			>
				{extra.emoji}{' '}{extra.fn()}
			</Button>
		{/each}
	</div>
	<div class="mb-4">
		<Button variant="outline" Icon={EditIcon} onclick={() => (isEditing = !isEditing)}>{m.edit_action()}</Button>
	</div>
	<div class="categories">
		{#each checklist.sections as section}
			<Category {section} {isEditing} />
		{/each}
	</div>

	<div class="flex justify-center my-8">
		<Button onclick={save}>{m.save_checklist({ name: checklist.name })}</Button>
	</div>
</div>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;

	.container2 {
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
