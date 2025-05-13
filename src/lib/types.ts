type I18nFn = () => string;

export enum SectionType {
	MustHave,
	Clothes,
	Medicine,
	Electronics,
	JustBeforeLeaving,
	Cosmetics,
	Miscelaneous,
	OneDayBefore,
}

export type SectionConfig = {
	type: SectionType;
	priority?: number;
	items: I18nFn[];
};

export type Section = {
	type: SectionType,
	name: string;
	emoji: string;
	priority?: number;
	items: {name: string}[];
};

export type ChecklistConfig = {
	sections: SectionConfig[];
};

export type Extra = {
	fn: I18nFn;
	emoji: string;
	defaultSection: SectionType;
	items: {
		fn: I18nFn;
		section?: SectionType;
	}[]
};


export type Checklist = {
	name: string
	sections: Section[];
};


export type SavedChecklistSection = {
	name: string;
	items: {
		name: string;
		checked: boolean;
	}[];
};

export type SavedChecklist = {
	id: string;
	name: string;
	date: string;
	sections: SavedChecklistSection[];
}