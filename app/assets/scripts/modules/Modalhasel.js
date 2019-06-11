import $ from 'jquery';

// Haseldan
class Modalhasel {
	constructor() {
		this.openModalButton = $(".open-modal--haseldan");
		this.modal = $(".modalhasel");
		this.closeModalButton = $(".modalhasel__close");
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
		this.modal.addClass("modalhasel--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalhasel--is-visible");
	}
}

export default Modalhasel;