<script>
	import demo from 'shared/demo';

	let range = $state({
		temp: 0.7,
		maxLength: 256,
		topP: 0.9
	});
</script>

<div class="hidden h-screen flex-col xl:flex">
	<div class="flex h-16 flex-none items-center justify-between border-b border-border px-8 py-4">
		<h2 class="text-lg font-semibold">Playground</h2>
		<div class="flex w-full flex-1 items-center justify-end space-x-2">
			<div class="h-9 w-72">
				<uk-select
					cls-custom="button: uk-input-fake w-full flex justify-between items-center; dropdown: w-full"
					icon="chevrons-up-down"
					placeholder="Load a preset"
					searchable
				>
					<select hidden>
						<optgroup label="Examples">
							<option>Grammatical Standard English</option>
							<option>Summarize for a 2nd grader</option>
							<option>Text to command</option>
							<option>Q&A</option>
							<option>English to other languages</option>
							<option>Parse unstructured data</option>
							<option>Classification</option>
							<option>Natural language to Python</option>
							<option>Explain code</option>
							<option>Chat</option>
							<option>More examples</option>
						</optgroup>
					</select>
				</uk-select>
			</div>

			<button class="uk-btn uk-btn-secondary" data-uk-toggle="#save">Save</button>
			<div class="uk-modal uk-flex-top" id="save" data-uk-modal>
				<div class="uk-modal-dialog uk-margin-auto-vertical">
					<div class="uk-modal-header">
						<h2 class="uk-modal-title">Save preset</h2>
						<p class="mt-1.5 text-sm text-muted-foreground">
							This will save the current playground state as a preset which you can access later or
							share with others.
						</p>
					</div>
					<div class="uk-modal-body space-y-4">
						<div class="space-y-2">
							<label class="uk-form-label" for="name">Name</label>
							<input class="uk-input" id="name" type="text" />
						</div>

						<div class="space-y-2">
							<label class="uk-form-label" for="description">Description</label>
							<input class="uk-input" id="description" type="text" />
						</div>
					</div>
					<div class="uk-modal-footer text-right">
						<button class="uk-modal-close uk-btn uk-btn-primary" onclick={demo}>Save</button>
					</div>
				</div>
			</div>

			<button class="uk-btn uk-btn-secondary" onclick={demo}> View Code </button>

			<button class="uk-btn uk-btn-secondary"> Share </button>
			<div class="uk-drop uk-dropdown w-96 p-4" data-uk-drop="mode: click; pos: bottom-right;">
				<h3 class="text-lg font-semibold">Share preset</h3>
				<p class="mt-1.5 text-sm text-muted-foreground">
					Anyone who has this link and an OpenAI account will be able to view this.
				</p>

				<div class="flex items-center space-x-2 pt-4">
					<div class="flex-1">
						<input
							class="uk-input"
							readonly
							type="text"
							value="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003"
						/>
					</div>
					<div class="flex-none">
						<button class="uk-drop-close uk-btn uk-btn-primary" onclick={demo}>
							<uk-icon icon="copy"></uk-icon>
						</button>
					</div>
				</div>
			</div>

			<button class="uk-btn uk-btn-secondary">
				<span class="size-4">
					<uk-icon icon="ellipsis"></uk-icon>
				</span>
			</button>
			<div class="uk-drop uk-dropdown" data-uk-drop="mode: click; pos: bottom-right">
				<ul class="uk-dropdown-nav">
					<li>
						<a class="uk-drop-close" href="#" onclick={demo}>Content filter preferences</a>
					</li>
					<li class="uk-nav-divider"></li>
					<li>
						<a class="uk-drop-close text-destructive" href="#" onclick={demo}>Delete preset</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex flex-1 gap-x-6 px-8 py-6">
		<div class="flex flex-1 flex-col justify-between">
			<textarea
				class="uk-textarea h-full resize-none p-4"
				placeholder="Write a tagline for an ice cream shop"
				readonly
			></textarea>

			<div class="my-6 flex gap-x-2">
				<button class="uk-btn uk-btn-primary" onclick={demo}> Submit </button>
				<button class="uk-btn uk-btn-secondary" onclick={demo}>
					<span class="size-4">
						<uk-icon icon="history"></uk-icon>
					</span>
				</button>
			</div>
		</div>

		<div class="w-52 flex-none">
			<span class="uk-form-label"> Mode </span>
			<ul class="uk-tab-alt mt-2 h-auto">
				<li class="uk-active">
					<a href="#" onclick={demo} aria-label="">
						<span class="size-4">
							<uk-icon icon="letter-text"></uk-icon>
						</span>
					</a>
				</li>
				<li>
					<a href="#" onclick={demo} aria-label="">
						<span class="size-4">
							<uk-icon icon="a-arrow-down"></uk-icon>
						</span>
					</a>
				</li>
				<li>
					<a href="#" onclick={demo} aria-label="">
						<span class="size-4">
							<uk-icon icon="whole-word"></uk-icon>
						</span>
					</a>
				</li>
			</ul>

			<div class="mt-4 space-y-2">
				<span class="uk-form-label block">Model</span>
				<div class="h-9">
					<uk-select
						cls-custom="button: uk-input-fake w-full flex justify-between items-center; dropdown: w-full"
						icon="chevrons-up-down"
						searchable
					>
						<select hidden>
							<option selected>text-davinci-003</option>
							<option>text-curie-001</option>
							<option>text-babbage-001</option>
							<option>text-ada-001</option>
							<optgroup label="Codex">
								<option>code-davinci-002</option>
								<option>code-cushman-001</option>
							</optgroup>
						</select>
					</uk-select>
				</div>
			</div>

			<div class="mt-4 space-y-2">
				<div class="flex items-center justify-between">
					<span class="uk-form-label">Temperature</span>
					<span class="text-sm text-muted-foreground">{range.temp}</span>
				</div>
				<input class="uk-range" type="range" bind:value={range.temp} min="0" max="1" step="0.1" />
			</div>

			<div class="mt-4 space-y-2">
				<div class="flex items-center justify-between">
					<span class="uk-form-label">Maximum Length</span>
					<span class="text-sm text-muted-foreground">{range.maxLength}</span>
				</div>
				<input
					class="uk-range"
					type="range"
					bind:value={range.maxLength}
					min="0"
					max="4000"
					step="100"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<div class="flex items-center justify-between">
					<span class="uk-form-label">Top P</span>
					<span class="text-sm text-muted-foreground">{range.topP}</span>
				</div>
				<input class="uk-range" type="range" bind:value={range.topP} min="0" max="1" step="0.1" />
			</div>
		</div>
	</div>
</div>
