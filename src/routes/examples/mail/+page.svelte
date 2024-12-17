<script lang="ts">
	import moment from 'moment';
	import demo from 'shared/demo';

	const menus = [
		[
			{ icon: 'inbox', text: 'Inbox', counter: 128 },
			{ icon: 'sticky-note', text: 'Draft', counter: 9 },
			{ icon: 'send', text: 'Sent', counter: null },
			{ icon: 'archive-x', text: 'Junk', counter: 23 },
			{ icon: 'trash-2', text: 'Trash', counter: null },
			{ icon: 'archive', text: 'Archive', counter: null }
		],
		[
			{ icon: 'users-round', text: 'Social', counter: 972 },
			{ icon: 'octagon-alert', text: 'Updates', counter: 342 },
			{ icon: 'messages-square', text: 'Forums', counter: 128 },
			{ icon: 'shopping-cart', text: 'Shopping', counter: 8 },
			{ icon: 'archive', text: 'Promotion', counter: 21 }
		]
	];

	const toolbars = [
		[
			{ icon: 'archive', tooltip: 'Archive' },
			{ icon: 'archive-x', tooltip: 'Move to junk' },
			{ icon: 'trash-2', tooltip: 'Move to trash' }
		],
		[{ icon: 'clock', tooltip: 'Snooze' }]
	];

	const replies = [
		{ icon: 'reply', tooltip: 'Reply' },
		{ icon: 'reply-all', tooltip: 'Reply all' },
		{ icon: 'forward', tooltip: 'Forward' }
	];

	const mails = [
		{
			id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
			initial: 'WS',
			name: 'William Smith',
			email: 'williamsmith@example.com',
			subject: 'Meeting Tomorrow',
			text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
			date: '2023-10-22T09:00:00',
			read: true,
			active: true,
			labels: ['meeting', 'work', 'important']
		},
		{
			id: '110e8400-e29b-11d4-a716-446655440000',
			initial: 'AS',
			name: 'Alice Smith',
			email: 'alicesmith@example.com',
			subject: 'Re: Project Update',
			text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
			date: '2023-10-22T10:30:00',
			read: true,
			active: false,
			labels: ['work', 'important']
		},
		{
			id: '3e7c3f6d-bdf5-46ae-8d90-171300f27ae2',
			initial: 'BJ',
			name: 'Bob Johnson',
			email: 'bobjohnson@example.com',
			subject: 'Weekend Plans',
			text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
			date: '2023-04-10T11:45:00',
			read: true,
			active: false,
			labels: ['personal']
		},
		{
			id: '61c35085-72d7-42b4-8d62-738f700d4b92',
			initial: 'ED',
			name: 'Emily Davis',
			email: 'emilydavis@example.com',
			subject: 'Re: Question about Budget',
			text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
			date: '2023-03-25T13:15:00',
			read: false,
			active: false,
			labels: ['work', 'budget']
		},
		{
			id: '8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97',
			initial: 'MW',
			name: 'Michael Wilson',
			email: 'michaelwilson@example.com',
			subject: 'Important Announcement',
			text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
			date: '2023-03-10T15:00:00',
			read: false,
			active: false,
			labels: ['meeting', 'work', 'important']
		},
		{
			id: '1f0f2c02-e299-40de-9b1d-86ef9e42126b',
			initial: 'SB',
			name: 'Sarah Brown',
			email: 'sarahbrown@example.com',
			subject: 'Re: Feedback on Proposal',
			text: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
			date: '2023-02-15T16:30:00',
			read: true,
			active: false,
			labels: ['work']
		},
		{
			id: '17c0a96d-4415-42b1-8b4f-764efab57f66',
			initial: 'DL',
			name: 'David Lee',
			email: 'davidlee@example.com',
			subject: 'New Project Idea',
			text: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
			date: '2023-01-28T17:45:00',
			read: false,
			active: false,
			labels: ['meeting', 'work', 'important']
		},
		{
			id: '2f0130cb-39fc-44c4-bb3c-0a4337edaaab',
			initial: 'OW',
			name: 'Olivia Wilson',
			email: 'oliviawilson@example.com',
			subject: 'Vacation Plans',
			text: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
			date: '2022-12-20T18:30:00',
			read: true,
			active: false,
			labels: ['personal']
		},
		{
			id: 'de305d54-75b4-431b-adb2-eb6b9e546014',
			initial: 'JM',
			name: 'James Martin',
			email: 'jamesmartin@example.com',
			subject: 'Re: Conference Registration',
			text: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
			date: '2022-11-30T19:15:00',
			read: true,
			active: false,
			labels: ['work', 'conference']
		},
		{
			id: '7dd90c63-00f6-40f3-bd87-5060a24e8ee7',
			initial: 'SW',
			name: 'Sophia White',
			email: 'sophiawhite@example.com',
			subject: 'Team Dinner',
			text: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!\n\nBest, Sophia",
			date: '2022-11-05T20:30:00',
			read: false,
			active: false,
			labels: ['meeting', 'work']
		},
		{
			id: '99a88f78-3eb4-4d87-87b7-7b15a49a0a05',
			initial: 'DJ',
			name: 'Daniel Johnson',
			email: 'danieljohnson@example.com',
			subject: 'Feedback Request',
			text: "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.\n\nYour feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.\n\nRegards, Daniel",
			date: '2022-10-22T09:30:00',
			read: false,
			active: false,
			labels: ['work']
		},
		{
			id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
			initial: 'AT',
			name: 'Ava Taylor',
			email: 'avataylor@example.com',
			subject: 'Re: Meeting Agenda',
			text: "Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.\n\nIf you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.\n\nIt's essential that our meeting is productive and addresses all relevant matters.\n\nLooking forward to our meeting! Ava",
			date: '2022-10-10T10:45:00',
			read: true,
			active: false,
			labels: ['meeting', 'work']
		},
		{
			id: 'c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6',
			initial: 'WA',
			name: 'William Anderson',
			email: 'williamanderson@example.com',
			subject: 'Product Launch Update',
			text: "The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.\n\nI'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.\n\nLet's make this product launch a resounding success!\n\nBest regards, William",
			date: '2022-09-20T12:00:00',
			read: false,
			active: false,
			labels: ['meeting', 'work', 'important']
		},
		{
			id: 'ba54eefd-4097-4949-99f2-2a9ae4d1a836',
			initial: 'MH',
			name: 'Mia Harris',
			email: 'miaharris@example.com',
			subject: 'Re: Travel Itinerary',
			text: "I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.\n\nIf there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.\n\nExcited for the trip! Mia",
			date: '2022-09-10T13:15:00',
			read: true,
			active: false,
			labels: ['personal', 'travel']
		},
		{
			id: 'df09b6ed-28bd-4e0c-85a9-9320ec5179aa',
			initial: 'EC',
			name: 'Ethan Clark',
			email: 'ethanclark@example.com',
			subject: 'Team Building Event',
			text: "Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.\n\nPlease let me know your thoughts and availability. We want this event to be both enjoyable and productive.\n\nTogether, we'll strengthen our team and boost our performance.\n\nRegards, Ethan",
			date: '2022-08-25T15:30:00',
			read: false,
			active: false,
			labels: ['meeting', 'work']
		},
		{
			id: 'd67c1842-7f8b-4b4b-9be1-1b3b1ab4611d',
			initial: 'CH',
			name: 'Chloe Hall',
			email: 'chloehall@example.com',
			subject: 'Re: Budget Approval',
			text: "The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.\n\nI've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.\n\nIt's an exciting time for us! Chloe",
			date: '2022-08-10T16:45:00',
			read: true,
			active: false,
			labels: ['work', 'budget']
		},
		{
			id: '6c9a7f94-8329-4d70-95d3-51f68c186ae1',
			initial: 'ST',
			name: 'Samuel Turner',
			email: 'samuelturner@example.com',
			subject: 'Weekend Hike',
			text: "Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.\n\nI've done some research and have a few routes in mind.\n\nLet me know if you're interested, and we can plan the details.\n\nIt's sure to be a memorable experience! Samuel",
			date: '2022-07-28T17:30:00',
			read: false,
			active: false,
			labels: ['personal']
		}
	];

	let active = $state(0);

	let mail = $derived(mails[active]);
</script>

<div class="hidden divide-x divide-border xl:flex">
	<div class="w-72">
		<div class="flex h-14 items-center justify-center border-b border-border px-4 py-2">
			<div class="h-10 flex-1">
				<uk-select
					cls-custom="button: uk-input-fake w-full flex justify-between items-center; dropdown: w-full"
					icon="chevrons-up-down"
				>
					<select hidden>
						<option data-icon="user" selected>alicia@example.com</option>
						<option data-icon="user">alicia@yahoo.com</option>
						<option data-icon="user">alicia@cloud.com</option>
					</select>
				</uk-select>
			</div>
		</div>

		<div class="p-1">
			<ul class="uk-nav uk-nav-primary">
				{#each menus[0] as menu, a}
					<li class={a === 0 ? 'uk-active' : ''}>
						<a class="flex justify-between" href="#" onclick={demo}>
							<div class="flex flex-1 items-center gap-x-2">
								<span class="size-4">
									<uk-icon icon={menu.icon}></uk-icon>
								</span>
								<span>{menu.text}</span>
							</div>
							{#if menu.counter !== null}
								<span>{menu.counter}</span>
							{/if}
						</a>
					</li>
				{/each}
				<li class="uk-nav-divider -mx-1"></li>
				{#each menus[1] as menu, a}
					<li>
						<a class="flex justify-between" href="#" onclick={demo}>
							<div class="flex flex-1 items-center gap-x-2">
								<span class="size-4">
									<uk-icon icon={menu.icon}></uk-icon>
								</span>
								<span>{menu.text}</span>
							</div>
							{#if menu.counter !== null}
								<span>{menu.counter}</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="grid flex-1 grid-cols-2 divide-x divide-border">
		<div class="flex flex-col" data-uk-filter="target: .js-filter">
			<div class="flex h-14 flex-none items-center border-b border-border px-4 py-2">
				<h1 class="text-xl font-bold">Inbox</h1>
				<ul class="uk-tab-alt ml-auto max-w-40">
					<li class="uk-active" data-uk-filter-control>
						<a href="#">All mail</a>
					</li>
					<li data-uk-filter-control="[data-status='unread']">
						<a href="#">Unread</a>
					</li>
				</ul>
			</div>

			<div class="flex flex-1 flex-col">
				<div class="p-4">
					<div class="uk-inline w-full">
						<span class="uk-form-icon text-muted-foreground">
							<span class="size-4">
								<uk-icon icon="search"></uk-icon>
							</span>
						</span>
						<input class="uk-input" type="text" placeholder="Search" />
					</div>
				</div>

				<div class="max-h-[600px] flex-1 overflow-y-auto">
					<ul class="js-filter space-y-2 p-4 pt-0">
						{#each mails as mail, a}
							<li
								class={`uk-rounded relative border border-border p-3 hover:bg-accent ${active === a ? 'bg-muted' : ''}`}
								data-status={mail.read === true ? 'read' : 'unread'}
							>
								<div class="flex w-full flex-col gap-1">
									<div class="flex items-center">
										<div class="flex items-center gap-2">
											<div class="font-semibold">{mail.name}</div>
											{#if mail.read === false}
												<span class="flex h-2 w-2 rounded-full bg-blue-600"></span>
											{/if}
										</div>
										<div class="ml-auto text-xs text-foreground">
											{moment(mail.date).fromNow()}
										</div>
									</div>
									<a class="text-xs font-medium" href="#" onclick={() => (active = a)}>
										{mail.subject}
										<span class="absolute inset-0"></span>
									</a>
									<div class="line-clamp-2 text-xs text-muted-foreground">
										{mail.text}
									</div>
									<div class="flex items-center gap-2">
										{#each mail.labels as label}
											<a
												class={`uk-label relative z-10 ${label === 'work' ? 'uk-label-primary' : ''}`}
												href="#"
												onclick={demo}
											>
												{label}
											</a>
										{/each}
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="flex flex-col">
			<div class="flex h-14 flex-none items-center border-b border-border p-2">
				<div class="flex w-full justify-between">
					<div class="flex gap-x-2 divide-x divide-border">
						{#each toolbars as a, b}
							<ul class={`flex gap-x-1 ${b === 1 ? 'pl-2' : ''}`}>
								{#each a as c}
									<li>
										<a
											class="uk-btn uk-btn-ghost uk-btn-icon"
											href="#"
											onclick={demo}
											data-uk-tooltip={c.tooltip}
											aria-label={c.tooltip}
										>
											<span class="size-4">
												<uk-icon icon={c.icon}></uk-icon>
											</span>
										</a>
									</li>
								{/each}
							</ul>
						{/each}
					</div>
					<div class="flex gap-x-2 divide-x divide-border">
						<ul class="flex gap-x-1">
							{#each replies as a}
								<li>
									<a
										class="uk-btn uk-btn-ghost uk-btn-icon"
										href="#"
										onclick={demo}
										data-uk-tooltip={a.tooltip}
										aria-label={a.tooltip}
									>
										<span class="size-4">
											<uk-icon icon={a.icon}></uk-icon>
										</span>
									</a>
								</li>
							{/each}
						</ul>
						<div class="uk-inline pl-2">
							<button class="uk-btn uk-btn-ghost uk-btn-icon" aria-label="Menu">
								<span class="size-4">
									<uk-icon icon="ellipsis-vertical"></uk-icon>
								</span>
							</button>
							<div
								class="uk-drop uk-dropdown w-52"
								data-uk-dropdown="pos: bottom-right; mode: click"
							>
								<ul class="uk-dropdown-nav uk-nav">
									<li>
										<a class="uk-drop-close" onclick={demo}> Mark as unread </a>
									</li>
									<li>
										<a class="uk-drop-close" onclick={demo}> Star thread </a>
									</li>
									<li>
										<a class="uk-drop-close" onclick={demo}> Add label </a>
									</li>
									<li>
										<a class="uk-drop-close" onclick={demo}> Mute thread </a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-1 flex-col" id="test">
				<div class="flex-1">
					<div class="flex items-start p-4">
						<div class="flex items-start gap-4">
							<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
								{mail.initial}
							</span>
							<div class="grid gap-1">
								<div class="font-semibold">{mail.name}</div>
								<div class="line-clamp-1 text-xs">{mail.subject}</div>
								<div class="line-clamp-1 text-xs">
									<span class="font-medium">Reply-To:</span>
									{mail.email}
								</div>
							</div>
						</div>
						<div class="ml-auto text-xs text-muted-foreground">
							{new Date(mail.date).toLocaleString('en-US', {
								year: '2-digit',
								month: 'long',
								day: '2-digit',
								hour: '2-digit',
								minute: '2-digit',
								second: '2-digit',
								hour12: true
							})}
						</div>
					</div>
					<div class="flex-1 space-y-4 whitespace-pre-line border-t border-border p-4">
						{mail.text}
					</div>
				</div>
				<div class="flex-none space-y-4 border-t border-border p-4">
					<div class="">
						<label for="message" class="sr-only">Message</label>
						<textarea class="uk-textarea" id="message" placeholder={`Reply ${mail.name}`}
						></textarea>
					</div>
					<div class="flex justify-between">
						<label class="inline-flex items-center gap-x-2 text-xs" for="mute">
							<input class="uk-toggle-switch uk-toggle-switch-primary" id="mute" type="checkbox" />
							Mute this thread
						</label>
						<button class="uk-btn uk-btn-primary" onclick={demo}> Send </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
