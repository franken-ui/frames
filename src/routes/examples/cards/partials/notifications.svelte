<script>
	import demo from 'shared/demo';
</script>

<div class="uk-card">
	<div class="uk-card-header space-y-2">
		<h3 class="uk-h3">Notifications</h3>
		<p class="text-muted-foreground">Choose what you want to be notified about.</p>
	</div>

	<div class="uk-card-body">
		<ul class="uk-nav uk-nav-secondary">
			<li class="-mx-1">
				<a class="" href="#" onclick={demo}>
					<div class="flex gap-x-4">
						<span class="size-4">
							<uk-icon icon="bell"></uk-icon>
						</span>
						<div class="flex-1">
							<p>Everything</p>
							<p class="text-muted-foreground">Email digest, mentions & all activity.</p>
						</div>
					</div>
				</a>
			</li>
			<li class="uk-active -mx-1">
				<a class="" href="#" onclick={demo}>
					<div class="flex gap-x-4">
						<span class="size-4">
							<uk-icon icon="user"></uk-icon>
						</span>
						<div class="flex-1">
							<p>Available</p>
							<p class="text-muted-foreground">Only mentions and comments.</p>
						</div>
					</div>
				</a>
			</li>
			<li class="-mx-1">
				<a class="" href="#" onclick={demo}>
					<div class="flex gap-x-4">
						<span class="size-4">
							<uk-icon icon="eye-off"></uk-icon>
						</span>
						<div class="flex-1">
							<p>Ignoring</p>
							<p class="text-muted-foreground">Turn off all notifications.</p>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</div>
