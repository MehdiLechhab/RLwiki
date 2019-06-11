import $ from 'jquery';

// Seraph
class Modalseraph {
	constructor() {
		this.openModalButton = $(".open-modal--seraph");
		this.modal = $(".modalseraph");
		this.closeModalButton = $(".modalseraph__close");
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
		this.modal.addClass("modalseraph--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalseraph--is-visible");
	}
}

export default Modalseraph;