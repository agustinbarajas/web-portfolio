const reportModal = document.getElementById('report-modal');
const reportButton= document.getElementById('report-button');

const handleModal = evt => {
	evt.preventDefault();
	document.body.appendChild(reportModal.content);
}

reportButton.addEventListener('click', handleModal);
