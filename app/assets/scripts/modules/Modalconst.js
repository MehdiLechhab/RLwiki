import $ from 'jquery';

// Construct
class Modalconst {
	constructor() {
		this.openModalButton = $(".open-modal--const");
		this.modal = $(".modalconst");
		this.closeModalButton = $(".modalconst__close");
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
		this.modal.addClass("modalconst--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalconst--is-visible");
	}
}

export default Modalconst;