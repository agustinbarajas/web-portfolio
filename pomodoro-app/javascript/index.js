const reportModal = document.querySelector('#report-modal');
const reportButton = document.getElementById('report-button');

const handleModal = evt => {
	evt.preventDefault();
	document.body.appendChild(reportModal.content.cloneNode(true));

	const closeModal = document.querySelector('.modal-close');

	const handleCloseModal = evt => {
		evt.preventDefault();
		document.body.removeChild(document.body.lastElementChild)
	};

	closeModal.addEventListener('click', handleCloseModal);
}

reportButton.addEventListener('click', handleModal);
