import type { Checklist } from '$lib/types';

export function exportToAppleNotes(checklist: Checklist): string {
	let s = ''
	for (const section of checklist.sections) {
		s += `${section.name}\n`;
		for (const item of section.items) {
			s += `- ${item.name}\n`;
		}
		s += '\n';
	}
	return s;
}
