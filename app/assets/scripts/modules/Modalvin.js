import $ from 'jquery';

// Haseldan
class Modalvin {
	constructor() {
		this.openModalButton = $(".open-modal--vinds");
		this.modal = $(".modalvin");
		this.closeModalButton = $(".modalvin__close");
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
		this.modal.addClass("modalvin--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalvin--is-visible");
	}
}

export default Modalvin;