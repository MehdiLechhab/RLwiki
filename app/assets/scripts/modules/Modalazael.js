import $ from 'jquery';

// Azael
class Modalazael {
	constructor() {
		this.openModalButton = $(".open-modal--azael");
		this.modal = $(".modalazael");
		this.closeModalButton = $(".modalazael__close");
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
		this.modal.addClass("modalazael--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalazael--is-visible");
	}
}

export default Modalazael;