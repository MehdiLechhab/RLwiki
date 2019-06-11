import $ from 'jquery';

// Haseldan
class Modalkasp {
	constructor() {
		this.openModalButton = $(".open-modal--kasparan");
		this.modal = $(".modalkasp");
		this.closeModalButton = $(".modalkasp__close");
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
		this.modal.addClass("modalkasp--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalkasp--is-visible");
	}
}

export default Modalkasp;