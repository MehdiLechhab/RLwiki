import $ from 'jquery';

// cameo
class Modalcameo {
	constructor() {
		this.openModalButton = $(".open-modal--cameo");
		this.modal = $(".modalcameo");
		this.closeModalButton = $(".modalcameo__close");
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
		this.modal.addClass("modalcameo--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalcameo--is-visible");
	}
}

export default Modalcameo;