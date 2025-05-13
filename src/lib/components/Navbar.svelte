<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import { X, Menu } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let mobileMenuOpen = $state(false);
	let isMobile = $state(false);

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	};

	onMount(() => {
		const checkSize = () => {
			isMobile = window.innerWidth < 768;
			if (!isMobile && mobileMenuOpen) {
				mobileMenuOpen = false;
				document.body.style.overflow = '';
			}
		};
		
		checkSize();
		window.addEventListener('resize', checkSize);
		
		return () => {
			window.removeEventListener('resize', checkSize);
			document.body.style.overflow = '';
		};
	});
</script>

<nav class="w-full bg-white shadow-sm rounded-md max-w-[80rem] mx-auto">
	<div class="container mx-auto px-4 py-3 flex justify-between items-center">
		<div class="font-bold text-xl">Travel Checklist Builder</div>
		
		<!-- Desktop Navigation -->
		<div class="hidden md:flex space-x-6">
			<a href="/about" class="hover:text-indigo-600 transition-colors">About</a>
			<a href="/my-checklists" class="hover:text-indigo-600 transition-colors">My checklists</a>
		</div>
		
		<!-- Mobile Menu Button -->
		<button 
			class="md:hidden"
			onclick={toggleMobileMenu}
			aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
		>
			{#if mobileMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
<div 
	class="fixed inset-0 bg-white z-20 flex flex-col pt-16"
	transition:slide={{ duration: 300 }}
>
	<div class="container mx-auto px-4 flex justify-end">
		<Button Icon={X} onclick={toggleMobileMenu} kind="ghost" />
	</div>
	
	<div class="flex flex-col items-center justify-center flex-grow space-y-8 text-xl">
        <a 
			href="/" 
			class="hover:text-indigo-600 transition-colors"
			onclick={toggleMobileMenu}
		>
			New checklist
		</a>
		<a 
			href="/about" 
			class="hover:text-indigo-600 transition-colors"
			onclick={toggleMobileMenu}
		>
			About
		</a>
		<a 
			href="/checklists" 
			class="hover:text-indigo-600 transition-colors"
			onclick={toggleMobileMenu}
		>
			My checklists
		</a>
	</div>
</div>
{/if} 