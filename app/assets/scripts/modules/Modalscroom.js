import $ from 'jquery';

// Haseldan
class Modalscroom {
	constructor() {
		this.openModalButton = $(".open-modal--scrooms");
		this.modal = $(".modalscroom");
		this.closeModalButton = $(".modalscroom__close");
		this.events();
	}

	events() {
		this.openModalButton.click(this.openModal.bind(this));

		this.closeModalButton.click(this.closeModal.bind(this));

		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modalscroom--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalscroom--is-visible");
	}
}

export default Modalscroom;