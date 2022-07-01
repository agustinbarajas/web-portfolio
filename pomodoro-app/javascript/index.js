const modalTemplate = document.querySelector('#modal-template');
const reportButton = document.getElementById('report-button');
const reportSummaryTemplate = document.querySelector('#report-summary-template');
const reportHeaderTemplate = document.querySelector('#report-header-template');

const handleModal = evt => {
	evt.preventDefault();
	document.body.appendChild(modalTemplate.content.cloneNode(true));
	document.body.classList.add('overflow-hidden');

	const closeModal = document.querySelector('.modal-close');
	const modalBody = document.querySelector('.modal-body');
	const modalHeader = document.querySelector('.modal-header');

	modalBody.appendChild(reportSummaryTemplate.content.cloneNode(true));
	modalHeader.appendChild(reportHeaderTemplate.content.cloneNode(true));

  const modalTabButton = document.querySelectorAll('.report-header__tab');

	const handleCloseModal = evt => {
		evt.preventDefault();
		document.body.removeChild(document.body.lastElementChild)
		document.body.classList.remove('overflow-hidden');
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
	modalTabButton.forEach(element => element.addEventListener('click', handleModalTab));
}

reportButton.addEventListener('click', handleModal);
