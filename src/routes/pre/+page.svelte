<script lang="ts">
	import { renderFluentBg } from '$lib/stores';

	// Disable the fluent background for this page
	renderFluentBg.set(false);
</script>

<svelte:head>
	<title>Prerelease builds</title>
	<meta name="description" content="Prerelease builds" />
</svelte:head>

<div class="m-10 h-full flex flex-col justify-center items-center">
	<div class="text-2xl font-semibold text-center mb-6">
		Prerelease versions
	</div>
	<a
		href="https://storage.googleapis.com/cloud-hook-b1106.appspot.com/artifacts/prerelease/android/app-release.apk"
		class="w-full max-w-[30rem] flex items-center justify-center space-x-2 py-2 px-[10px] mt-2 rounded bg-black text-white *:fill-white border border-white"
	>
		<svg inline-src="android" class="h-8 w-8" />
		<span>Download Android</span>
	</a>
	<a
		href="https://storage.googleapis.com/cloud-hook-b1106.appspot.com/artifacts/prerelease/StrumokSetup.exe"
		class="w-full max-w-[30rem] flex items-center justify-center space-x-2 py-2 px-[10px] mt-2 rounded bg-black text-white *:fill-white border border-white"
	>
		<svg inline-src="windows" class="h-8 w-8" />
		<span>Download Windows</span>
	</a>
	<a
		href="https://storage.googleapis.com/cloud-hook-b1106.appspot.com/artifacts/prerelease/linux.tar.gz"
		class="w-full max-w-[30rem] flex items-center justify-center space-x-2 py-2 px-[10px] mt-2 rounded bg-black text-white *:fill-white border border-white"
	>
		<span>Download Linux</span>
	</a>
</div>
