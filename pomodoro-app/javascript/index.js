const reportModal = document.querySelector('#report-modal');
const reportButton = document.getElementById('report-button');
const summaryTemplate = document.querySelector('#report-summary');

const handleModal = evt => {
	evt.preventDefault();
	document.body.appendChild(reportModal.content.cloneNode(true));

	const closeModal = document.querySelector('.modal-close');
	const modalBody = document.querySelector('.report-body');
	const reportModalTabButton = document.querySelectorAll('.report-header__tab');

	modalBody.appendChild(summaryTemplate.content.cloneNode(true));

	const handleCloseModal = evt => {
		evt.preventDefault();
		document.body.removeChild(document.body.lastElementChild)
	};

	const handleModalTab = async (evt) => {
		evt.preventDefault();
		document.querySelector('.report-header__tab.tab__active')
			.classList.remove('tab__active');
		evt.currentTarget.classList.add('tab__active');
		const newTemplate = document.querySelector(`#${evt.currentTarget.dataset.template}`);
		const oldTemplate = document.querySelector('.report-content');

		if (oldTemplate) {
			modalBody.replaceChild(newTemplate.content.cloneNode(true), oldTemplate);
		}

		const reportRankingBody = document.querySelector('#report-ranking-body');
		if (reportRankingBody) {
			const { data: { users } } = await get('assets/data/users.json');
			const usersHtml = users.map(buildReportUserCard).join('');
			reportRankingBody.innerHTML = usersHtml;
		}
	};

	closeModal.addEventListener('click', handleCloseModal);
	reportModalTabButton.forEach(element => element.addEventListener('click', handleModalTab));
}

reportButton.addEventListener('click', handleModal);
