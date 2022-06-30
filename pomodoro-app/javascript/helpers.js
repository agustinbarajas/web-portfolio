function buildReportUserCard(user) {
	return (`
		<div class="report-user">
			<label class="report-user-position">${user.position}</label>
			<img class="report-user-image" src="${user.profile_picture}" />
			<label class="report-user-name">${user.name}</label>
			<label class="report-user-time">${parseTime(user.time)}</label>
		</div>
	`);
}

function parseTime(time) {
	const hours = (time / MINUTES_PER_HOUR).toFixed(0);
	const minutes = (time % MINUTES_PER_HOUR)
		.toString()
		.padStart(MAX_MINUTES_DIGITS, '0');

	return `${hours}:${minutes}`;
}
