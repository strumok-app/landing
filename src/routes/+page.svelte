<script>
	import { MediaQuery } from 'svelte/reactivity';
	import { Carousel } from 'flowbite-svelte';
	import Controls from 'flowbite-svelte/Controls.svelte';

	export const mobileImages = Array.from({ length: 8 }, (_, i) => ({
		src: `screenshots/mobile/${i + 1}.png`,
		alt: `Screan ${i + 1}`,
		title: `Screan ${i + 1}`
	}));

	export const desktopImages = Array.from({ length: 8 }, (_, i) => ({
		src: `screenshots/desktop/${i + 1}.png`,
		alt: `Screan ${i + 1}`,
		title: `Screan ${i + 1}`
	}));

	const tabletScrean = new MediaQuery('min-width: 640px');
	const desktopScrean = new MediaQuery('min-width: 820px');
</script>

{#if !desktopScrean.current}
	<div class="mt-4 flex flex-grow flex-col justify-between">
		<div class="flex flex-col flex-grow justify-center *:h-full">
			<Carousel
				images={tabletScrean.current ? desktopImages : mobileImages}
				duration={10000}
				imgClass="object-contain h-full w-fit h-fill"
				class="h-full md:h-full lg:h-full"
			>
				<Controls />
			</Carousel>
		</div>
		<div
			class="h-60 mt-4 px-8
		text-center text-lg text-black
		flex flex-col items-center justify-end"
		>
			<div>
				Дивись фільми, серіали, аніме та читай мангу в одному додатку Strumok на телефоні та Anroid TV!
			</div>
			<div class="mb-4">
				<a
					href="https://github.com/strumok-app/strumok/releases/latest/download/app-release.apk"
					target="_blank"
					rel="noopener noreferrer"
					class="
					flex items-center justify-center space-x-2
					py-2 px-4 mt-2
					rounded
					bg-black text-white *:fill-white
				">
					<span>Завантажити для </span>
					<svg inline-src="android" class="h-8 w-8" />
				</a>
			</div>
		</div>
	</div>
{:else}
	<div class="hidden lg:flex flex-grow justify-around">
		<div class="w-[40%] h-full flex flex-col justify-center items-center">
			<div class="w-90 text-center">
				Дивись фільми, серіали, аніме та читай мангу в одному додатку Strumok на телефоні та Android
				TV – зручний доступ до улюбленого контенту!
			</div>
			<div class="mt-4 w-120 h-30 flex lg:flex-col xl:flex-row items-center justify-around">
				<div>
					<a
						href="https://github.com/strumok-app/strumok/releases/latest/download/StrumokSetup.exe"
						target="_blank"
						rel="noopener noreferrer"
						class="
					flex items-center justify-center space-x-2
					py-2 px-4
					border rounded
					bg-black text-white *:fill-white
					hover:bg-white hover:text-black hover:*:fill-black
				"
					>
						<span>Завантажити для </span>
						<svg inline-src="windows" class="h-8 w-8" />
					</a>
				</div>
				<div>
					<a
						href="https://github.com/strumok-app/strumok/releases/latest/download/app-release.apk"
						target="_blank"
						rel="noopener noreferrer"
						class="
					flex items-center justify-center space-x-2
					py-2 px-4
					border rounded
					bg-black text-white *:fill-white
					hover:bg-white hover:text-black hover:*:fill-black
				"
					>
						<span>Завантажити для </span>
						<svg inline-src="android" class="h-8 w-8" />
					</a>
				</div>
			</div>
		</div>
		<div class="w-[60%] h-full flex justify-center items-center">
			<div class="*:w-full w-full">
				<Carousel
					images={desktopImages}
					duration={10000}
					class="w-ful lg:h-90 xl:h-110 2xl:h-140"
					imgClass="object-contain h-full w-fit h-fill"
				>
					<Controls />
				</Carousel>
			</div>
		</div>
	</div>
{/if}
