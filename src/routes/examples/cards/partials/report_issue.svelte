<script>
	import demo from 'shared/demo';
</script>

<div class="uk-card">
	<div class="uk-card-header space-y-2">
		<h3 class="uk-h3">Report an issue</h3>
		<p class="text-muted-foreground">What area are you having problems with?</p>
	</div>

	<div class="uk-card-body mt-4 space-y-6">
		<div class="space-y-2">
			<div class="uk-form-label">Area</div>
			<div class="h-10">
				<uk-select
					cls-custom="button: uk-input-fake w-full flex justify-between items-center; dropdown: w-full"
					icon="chevrons-up-down"
				>
					<select hidden>
						<option>Team</option>
						<option>Billing</option>
						<option>Account</option>
						<option>Deployment</option>
						<option>Support</option>
					</select>
				</uk-select>
			</div>
		</div>

		<div class="space-y-2">
			<div class="uk-form-label">Severity</div>
			<div class="h-10">
				<uk-select
					cls-custom="button: uk-input-fake w-full flex justify-between items-center; dropdown: w-full"
					icon="chevrons-up-down"
				>
					<select hidden>
						<option>Severity 1 (Highest)</option>
						<option>Severity 2</option>
						<option>Severity 3</option>
						<option>Severity 4 (Lowest)</option>
					</select>
				</uk-select>
			</div>
		</div>

		<div class="space-y-2">
			<label class="uk-form-label" for="subject">Subject</label>
			<input id="subject" class="uk-input" placeholder="Subject" type="text" />
		</div>

		<div class="space-y-2">
			<label class="uk-form-label" for="description">Description</label>
			<textarea
				class="uk-textarea"
				id="description"
				placeholder="More information relevant to the issue."
			></textarea>
		</div>

		<div class="space-y-2">
			<div class="uk-form-label">Tags</div>
			<div>
				<uk-input-tag state="danger" value="Spam"></uk-input-tag>
			</div>
		</div>
	</div>

	<div class="uk-card-footer flex justify-between">
		<button class="uk-btn uk-btn-ghost" onclick={demo}>Cancel</button>
		<button class="uk-btn uk-btn-primary" onclick={demo}>Submit</button>
	</div>
</div>
