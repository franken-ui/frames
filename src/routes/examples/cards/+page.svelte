<script lang="ts">
	import Register from './partials/register.svelte';
	import TeamMembers from './partials/team_members.svelte';
	import ReportIssue from './partials/report_issue.svelte';
	import Cookie from './partials/cookie.svelte';
	import Payment from './partials/payment.svelte';
	import ShareDocument from './partials/share_document.svelte';
	import Repository from './partials/repository.svelte';
	import Notifications from './partials/notifications.svelte';
</script>

<div class="hidden flex-wrap xl:flex" data-uk-grid="masonry: next">
	<div class="w-1/3 p-4">
		<Register />
	</div>

	<div class="relative z-10 w-1/3 p-4">
		<TeamMembers />
	</div>

	<div class="w-1/3 p-4">
		<ReportIssue />
	</div>

	<div class="relative z-10 w-1/3 p-4">
		<Payment />
	</div>

	<div class="w-1/3 p-4">
		<ShareDocument />
	</div>

	<div class="relative z-10 w-1/3 p-4">
		<Repository />
	</div>

	<div class="w-1/3 p-4">
		<Notifications />
	</div>

	<div class="w-1/3 p-4">
		<Cookie />
	</div>
</div>
