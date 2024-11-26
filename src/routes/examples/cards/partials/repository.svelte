<script>
	import demo from 'shared/demo';
</script>

<div class="uk-card uk-card-body space-y-6">
	<div class="flex gap-x-4">
		<div class="flex-1">
			<h3 class="uk-h3">franken-ui/ui</h3>
			<p class="mt-2 text-muted-foreground">
				Franken UI is an HTML-first, open-source library of UI components that works as a standalone
				or as a Tailwind CSS plugin.
			</p>
		</div>

		<div class="uk-btn-group flex-none">
			<a class="uk-btn uk-btn-secondary" href="https://github.com/franken-ui/ui" target="_blank">
				<span class="mr-2 size-4">
					<uk-icon icon="star"></uk-icon>
				</span>
				Star
			</a>
			<div class="uk-inline">
				<button class="uk-btn uk-btn-secondary uk-btn-icon">
					<span class="size-4">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</button>
				<div class="uk-drop uk-dropdown min-w-52" data-uk-dropdown="mode: click; pos: bottom-right">
					<ul class="uk-dropdown-nav">
						<li class="uk-nav-header">Suggested Lists</li>
						<li class="uk-nav-divider"></li>
						<li>
							<a class="uk-drop-close" href="#" onclick={demo}>
								<uk-icon class="mr-2" icon="check"></uk-icon>
								Future ideas
							</a>
						</li>
						<li>
							<a class="uk-drop-close" href="#" onclick={demo}>
								<span class="ml-6">My stack</span>
							</a>
						</li>
						<li>
							<a class="uk-drop-close" href="#" onclick={demo}>
								<span class="ml-6">Inspiration</span>
							</a>
						</li>
						<li>
							<a class="uk-drop-close" href="#" onclick={demo}>
								<uk-icon class="mr-2" icon="plus"></uk-icon>
								Create List
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="flex space-x-4 text-muted-foreground">
		<div class="flex items-center">
			<span class="mr-2 size-4 text-sky-400">
				<uk-icon icon="circle"></uk-icon>
			</span>
			TypeScript
		</div>
		<div class="flex items-center">
			<span class="mr-2 size-4 text-sky-400">
				<uk-icon icon="star"></uk-icon>
			</span>
			20k
		</div>
		<div>Updated January 2025</div>
	</div>
</div>
