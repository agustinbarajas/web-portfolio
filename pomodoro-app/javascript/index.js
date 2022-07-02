const reportSummaryTemplate = document.querySelector('#report-summary-template');
const reportHeaderTemplate = document.querySelector('#report-header-template');
const reportButton = document.getElementById('report-button');
const settingsButton = document.getElementById('settings-button');
let modalHeader;
let modalBody;

const handleReportModal = evt => {
	evt.preventDefault();
	createModal();

	modalHeader.appendChild(reportHeaderTemplate.content.cloneNode(true));
	modalBody.appendChild(reportSummaryTemplate.content.cloneNode(true));

	addReportModalTabEventListener();
}

const createModal = () => {
	let modalTemplate = document.querySelector('#modal-template');
	document.body.appendChild(modalTemplate.content.cloneNode(true));
	document.body.classList.add('overflow-hidden');

	initializeModalSections();
	addCloseModalEventListener();
}

const initializeModalSections = () => {
	modalHeader = document.querySelector('.modal-header');
	modalBody = document.querySelector('.modal-body');
}

const addCloseModalEventListener = () => {
	let closeModalButton;

	const handleCloseModal = evt => {
		evt.preventDefault();
		document.body.removeChild(document.body.lastElementChild)
		document.body.classList.remove('overflow-hidden');
	};
	closeModalButton = document.querySelector('.modal-close');
	closeModalButton.addEventListener('click', handleCloseModal);
}

const addReportModalTabEventListener = () => {
	const modalTabButton = document.querySelectorAll('.report-header__tab');

	const handleModalTab = evt => {
		evt.preventDefault();
		document.querySelector('.report-header__tab.tab__active')
			.classList.remove('tab__active');
		evt.currentTarget.classList.add('tab__active');

		setReportModalTabTemplate(evt.currentTarget.dataset.template);
		addRankingUsers();
	};

	modalTabButton.forEach(element => element.addEventListener('click', handleModalTab));
}

const setReportModalTabTemplate = (templateName) => {
	const newTemplate = document.querySelector(`#${templateName}`);
	const oldTemplate = document.querySelector('.report-content');

	if (oldTemplate) {
		modalBody.replaceChild(newTemplate.content.cloneNode(true), oldTemplate);
	}
}

const addRankingUsers = async () => {
	const reportRankingBody = document.querySelector('#report-ranking-body');
	if (reportRankingBody) {
		const { data: { users } } = await get('assets/data/users.json');
		const usersHtml = users.map(buildReportUserCard).join('');
		reportRankingBody.innerHTML = usersHtml;
	}
}

const handleSettingsModal = evt => {
	evt.preventDefault();
	createModal();
}

reportButton.addEventListener('click', handleReportModal);
settingsButton.addEventListener('click', handleSettingsModal);
