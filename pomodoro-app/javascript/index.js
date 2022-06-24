const reportModal = document.querySelector('#report-modal');
const reportButton = document.getElementById('report-button');

const handleModal = evt => {
	evt.preventDefault();
	document.body.appendChild(reportModal.content.cloneNode(true));

	const closeModal = document.querySelector('.modal-close');
	const reportModalTabButton = document.querySelectorAll('.report-header__tab');

	const handleCloseModal = evt => {
		evt.preventDefault();
		document.body.removeChild(document.body.lastElementChild)
	};

	const handleModalTab = evt => {
		evt.preventDefault();
		document.querySelector('.report-header__tab.tab__active')
			.classList.remove('tab__active');
		evt.currentTarget.classList.add('tab__active');
	};

	closeModal.addEventListener('click', handleCloseModal);
	reportModalTabButton.forEach(element => element.addEventListener('click', handleModalTab));
}

reportButton.addEventListener('click', handleModal);
