<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="relative h-screen text-white bg-sky-700">
	<div
		class="hidden lg:block absolute z-0 h-full w-[70%] right-0 strumok-curve-desktop bg-yellow-400"
	></div>
	<div class="lg:hidden absolute z-0 bottom-0 h-60 w-full strumok-curve-mobile bg-yellow-400"></div>
	<div class="absolute z-1 inset-0 flex flex-col">
		<div class="flex justify-between w-full items-center p-2">
			<div class="flex items-center space-x-2">
				<svg inline-src="logo" class="h-8 w-8"/>
				<span>Струмок</span>
			</div>
			<div>
				<a href="https://github.com/strumok-app/strumok" aria-label="github" target="_blank" rel="noopener noreferrer">
					<svg inline-src="github" class="h-8 w-8"/>
				</a>
			</div>
		</div>
		{@render children()}
	</div>
	<svg width="0" height="0">
		<defs>
			<clipPath id="strumokCurveMobile" clipPathUnits="objectBoundingBox">
				<path
					d="M 0,.15
                        V 1
                        H 1
                        V .05
                    	C .5,.3 .5,.01 0,.15 
						Z"
				/>
			</clipPath>
			<clipPath id="strumokCurveDesktop" clipPathUnits="objectBoundingBox">
				<path
					d="M .15, 0
						H 1
						V 1
						H 0
						C .3,.5 .005,.5 .15,0"
				/>
			</clipPath>
		</defs>
	</svg>
</div>

<style>
	.strumok-curve-desktop {
		clip-path: url(#strumokCurveDesktop);
	}

	.strumok-curve-mobile {
		clip-path: url(#strumokCurveMobile);
	}
</style>
