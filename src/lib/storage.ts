import type { Checklist, SavedChecklist } from './types';

function getChecklistIds(): string[] {
	const ids = window.localStorage.getItem('checklist_ids');
	if (!ids) return [];
	return JSON.parse(ids);
}

export function listSavedChecklists(): SavedChecklist[] {
	const results: SavedChecklist[] = [];
	for (const id of getChecklistIds()) {
		const checklist = window.localStorage.getItem(`checklist_${id}`);
		if (!checklist) continue;
		results.push(JSON.parse(checklist));
	}
	return results;
}

export function saveChecklist(checklist: Checklist): string {
	const ids = getChecklistIds();
	const id = crypto.randomUUID();
	const savedChecklist: SavedChecklist = {
		id,
		name: checklist.name,
		date: new Date().toISOString(),
		sections: checklist.sections.map((section) => ({
			name: section.name,
			items: section.items.map((item) => ({ name: item.name, checked: false }))
		}))
	};
	window.localStorage.setItem(`checklist_${id}`, JSON.stringify(savedChecklist));
	window.localStorage.setItem('checklist_ids', JSON.stringify([...ids, id]));
	return id;
}

export function deleteChecklist(id: string) {
	const ids = getChecklistIds();
	window.localStorage.removeItem(`checklist_${id}`);
	window.localStorage.setItem('checklist_ids', JSON.stringify(ids.filter((id) => id !== id)));
}

export function getChecklist(id: string): SavedChecklist | undefined {
    console.log(id)
	const checklist = window.localStorage.getItem(`checklist_${id}`);
	if (!checklist) return undefined;
	return JSON.parse(checklist);
}

export function updateChecklist(id: string, checklist: SavedChecklist) {
	window.localStorage.setItem(`checklist_${id}`, JSON.stringify(checklist));
}
