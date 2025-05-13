import * as m from '$lib/paraglide/messages.js';
import type { Checklist, ChecklistConfig, Extra } from '$lib/types';
import { SectionType } from '$lib/types';

const DefaultSectionNames = {
	[SectionType.MustHave]: { name: m.must_have, emoji: '🚨' },
	[SectionType.Clothes]: { name: m.clothes, emoji: '👕' },
	[SectionType.Medicine]: { name: m.medication, emoji: '💊' },
	[SectionType.Electronics]: { name: m.electronics, emoji: '💻' },
	[SectionType.JustBeforeLeaving]: { name: m.just_before_leaving, emoji: '🔑' },
	[SectionType.Cosmetics]: { name: m.cosmetics, emoji: '💄' },
	[SectionType.Miscelaneous]: { name: m.miscelaneous, emoji: '📦' },
	[SectionType.OneDayBefore]: { name: m.one_day_before, emoji: '📦' }
};

const Extras: Extra[] = [
	{
		fn: m.smartwatch,
		emoji: '⌚️',
		defaultSection: SectionType.Electronics,
		items: [{ fn: m.smartwatch }, { fn: m.watch_charger }]
	},
	{
		fn: m.laptop,
		emoji: '👨‍💻',
		defaultSection: SectionType.Electronics,
		items: [{ fn: m.laptop }, { fn: m.laptop_charger }]
	},
	{
		fn: m.summer_clothes,
		emoji: '⛱️',
		defaultSection: SectionType.Clothes,
		items: [
			{ fn: m.shirt },
			{ fn: m.sunglasses },
			{ fn: m.hat_or_cap },
			{ fn: m.flip_flops },
			{ fn: m.sunscreen, section: SectionType.Cosmetics }
		]
	},
	{
		fn: m.beach,
		emoji: '🏖️',
		defaultSection: SectionType.Clothes,
		items: [
			{ fn: m.beach_towel, section: SectionType.Miscelaneous },
			{ fn: m.crocs },
			{ fn: m.swimsuit }
		]
	},
	{
		fn: m.warm_clothes,
		emoji: '❄️',
		defaultSection: SectionType.Clothes,
		items: []
	},
	{
		fn: m.gaming_console,
		emoji: '🎮',
		defaultSection: SectionType.Electronics,
		items: [{ fn: m.gaming_console }, { fn: m.gaming_console_charger }]
	},
	{
		fn: m.skipper,
		emoji: '⛵️',
		defaultSection: SectionType.Clothes,
		items: [
			{ fn: m.skipper_license, section: SectionType.MustHave },
			{ fn: m.walkie_talkie, section: SectionType.Electronics },
			{ fn: m.sea_navigation, section: SectionType.Electronics }
		]
	},
	{
		fn: m.sailing,
		emoji: '⛵️',
		defaultSection: SectionType.Clothes,
		items: [
			{ fn: m.sailing_gloves },
			{ fn: m.jacket },
			{ fn: m.fleece_jacket },
			{ fn: m.crocs },
			{ fn: m.beach_towel, section: SectionType.Miscelaneous }
		]
	}
];

const BaseTemplate: ChecklistConfig = {
	sections: [
		{
			type: SectionType.MustHave,
			priority: 1,
			items: [
				m.passport,
				m.driving_license,
				m.cash,
				m.credit_card,
				m.phone,
				m.wallet,
				m.bookings,
				m.insurance
			]
		},
		{
			type: SectionType.OneDayBefore,
			items: [m.charge_devices, m.flight_check_in, m.download_movies, m.apps]
		},
		{
			type: SectionType.JustBeforeLeaving,
			priority: 2,
			items: [m.turn_off_devices, m.turn_off_water, m.check_garbage, m.close_windows]
		},
		{
			type: SectionType.Clothes,
			items: [
				m.underwear,
				m.socks,
				m.sleepwear,
				m.accessories,
				m.tshirts,
				m.trousers,
				m.jeans,
				m.hoodie
			]
		},
		{
			type: SectionType.Electronics,
			items: [m.charger, m.powerbank, m.earphones]
		},
		{
			type: SectionType.Medicine,
			items: [m.antihistamines, m.painkillers, m.diarrhea, m.plasters, m.cold_flu]
		},
		{
			type: SectionType.Miscelaneous,
			items: [m.sleeping_mask, m.sleeping_pillow, m.small_bag]
		},
		{
			type: SectionType.Cosmetics,
			items: [
				m.lip_balm,
				m.perfume,
				m.eye_drops,
				m.manicure_set,
				m.hand_cream,
				m.wet_wipes,
				m.deodorant,
				m.razor_blade,
				m.shaving_foam,
				m.wet_wipes,
				m.toothbrush,
				m.toothpaste
			]
		}
	]
};

function makeChecklist(base: ChecklistConfig): Checklist {
	return {
		name: m.new_checklist_placeholder(),
		sections: base.sections.map((section) => ({
			type: section.type,
			name: DefaultSectionNames[section.type].name(),
			emoji: DefaultSectionNames[section.type].emoji,
			priority: section.priority,
			items: section.items.map((i) => ({
				name: i()
			}))
		}))
	};
}

export { BaseTemplate as AllInOne, makeChecklist, Extras };
