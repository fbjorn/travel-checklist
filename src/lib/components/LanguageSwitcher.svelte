<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';

	const currentLocale = getLocale();

	let { mobile = false } = $props();
</script>

{#if !mobile}
	<Popover.Root>
		<Popover.Trigger>
			{#if currentLocale === 'en'}
				🇬🇧
			{:else}
				🇷🇺
			{/if}
		</Popover.Trigger>
		<Popover.Content class="w-fit">
			<div class="flex flex-col gap-2">
				<Button variant="ghost" onclick={() => setLocale('en')}>🇬🇧 English</Button>
				<Button variant="ghost" onclick={() => setLocale('ru')}>🇷🇺 Русский</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{:else}
	<div class="flex gap-4">
		<Button variant={currentLocale === 'en' ? 'secondary' : 'ghost'} onclick={() => setLocale('en')}
			>🇬🇧</Button
		>
		<Button variant={currentLocale === 'ru' ? 'secondary' : 'ghost'} onclick={() => setLocale('ru')}
			>🇷🇺</Button
		>
	</div>
{/if}
