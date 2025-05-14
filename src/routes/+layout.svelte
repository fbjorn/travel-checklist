<script lang="ts">
	import '../app.css';
	import '$lib/styles/globals.scss';
	import '@fontsource-variable/nunito';
	import '@fontsource-variable/manrope';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<div class="layout">
	<Navbar />
		{@render children()}
</div>

<style lang="scss">
	.layout {
		padding: 1rem;

		padding-bottom: 5rem;
	}
</style>
