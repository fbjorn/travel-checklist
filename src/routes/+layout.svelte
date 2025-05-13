<script lang="ts">
	import '../app.css';
	import '$lib/styles/globals.scss';
	import '@fontsource-variable/nunito';
	import '@fontsource-variable/manrope';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
</script>

<div class="layout">
	<ParaglideJS {i18n}>
		{@render children()}
	</ParaglideJS>
</div>

<style lang="scss">
	.layout {
		padding: 1rem;

		padding-bottom: 5rem;
	}
</style>
