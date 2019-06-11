import $ from 'jquery';

// Haseldan
class Modalashi {
	constructor() {
		this.openModalButton = $(".open-modal--ashiin");
		this.modal = $(".modalashi");
		this.closeModalButton = $(".modalashi__close");
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
		this.modal.addClass("modalashi--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalashi--is-visible");
	}
}

export default Modalashi;