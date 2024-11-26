<script lang="ts">
	import demo from 'shared/demo';

	const cookies = [
		{
			id: 'strict',
			title: 'Strictly Necessary',
			description: 'These cookies are essential in order to use the website and use its features.'
		},
		{
			id: 'functional',
			title: 'Functional Cookies',
			description: 'These cookies allow the website to provide personalized functionality.'
		},
		{
			id: 'performant',
			title: 'Performance Cookies',
			description: 'These cookies help to improve the performance of the website.'
		}
	];
</script>

<div class="uk-card">
	<div class="uk-card-header space-y-2">
		<h3 class="uk-h3">Cookie Settings</h3>
		<p class="text-muted-foreground">Manage your cookie settings here.</p>
	</div>

	<div class="uk-card-body mt-4 space-y-6">
		{#each cookies as a}
			<div class="flex items-center justify-between gap-2">
				<label class="flex flex-1 flex-col space-y-1 font-medium leading-none" for={a.id}>
					<span>{a.title}</span>
					<span class="font-normal leading-snug text-muted-foreground">{a.description}</span>
				</label>
				<input
					checked={a.id === 'strict'}
					class="uk-toggle-switch uk-toggle-switch-primary flex-none"
					id={a.id}
					type="checkbox"
				/>
			</div>
		{/each}
	</div>

	<div class="uk-card-footer">
		<button class="uk-btn uk-btn-default w-full" onclick={demo}> Save preferences </button>
	</div>
</div>
