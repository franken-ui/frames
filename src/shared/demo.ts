export default function (e: MouseEvent) {
	e.preventDefault();

	window.UIkit.notification({
		message: 'This is just a demo',
		status: 'destructive'
	});
}
