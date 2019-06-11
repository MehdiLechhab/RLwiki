import $ from 'jquery';

// Haseldan
class Modalrigan {
	constructor() {
		this.openModalButton = $(".open-modal--rigan");
		this.modal = $(".modalrigan");
		this.closeModalButton = $(".modalrigan__close");
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
		this.modal.addClass("modalrigan--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalrigan--is-visible");
	}
}

export default Modalrigan;