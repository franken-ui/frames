<script lang="ts">
	import demo from 'shared/demo';

	const people = [
		{
			name: 'Olivia Martin',
			email: 'm@example.com',
			role: 'Read and write access'
		},
		{
			name: 'Isabella Nguyen',
			email: 'b@example.com',
			role: 'Read-only access'
		},
		{
			name: 'Sofia Davis',
			email: 'p@example.com',
			role: 'Read-only access'
		}
	];
</script>

<div class="uk-card">
	<div class="uk-card-header space-y-2">
		<h3 class="uk-h3">Share this document</h3>
		<p class="text-muted-foreground">Anyone with the link can view this document.</p>
	</div>

	<div class="uk-card-body pt-0">
		<div class="flex gap-x-2">
			<div class="flex-1">
				<input class="uk-input" readonly value="http://example.com/link/to/document" />
			</div>
			<div class="flex-none">
				<button class="uk-btn uk-btn-default" onclick={demo}>Copy Link</button>
			</div>
		</div>

		<hr class="uk-divider-icon my-4" />

		<div class="space-y-6">
			<h4 class="font-medium">People with access</h4>
			{#each people as a}
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-accent">
							<img
								alt=""
								class="aspect-square h-full w-full"
								src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${a.name}`}
							/>
						</span>
						<div class="flex-1 space-y-2">
							<p class="font-medium leading-none">{a.name}</p>
							<p class="text-muted-foreground">{a.email}</p>
						</div>
					</div>
					<div class="h-10 w-52">
						<uk-select
							cls-custom="button: uk-input-fake w-full flex justify-between items-center; dropdown: w-full"
							icon="chevrons-up-down"
						>
							<select hidden>
								<option>Full access</option>
								<option>Read-only access</option>
							</select>
						</uk-select>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
