import $ from 'jquery';

// Dzin
class Modaldzin {
	constructor() {
		this.openModalButton = $(".open-modal--dzin");
		this.modal = $(".modaldzin");
		this.closeModalButton = $(".modaldzin__close");
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
		this.modal.addClass("modaldzin--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modaldzin--is-visible");
	}
}

export default Modaldzin;