import $ from 'jquery';

// Haseldan
class Modaldin {
	constructor() {
		this.openModalButton = $(".open-modal--dinakeri");
		this.modal = $(".modaldin");
		this.closeModalButton = $(".modaldin__close");
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
		this.modal.addClass("modaldin--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modaldin--is-visible");
	}
}

export default Modaldin;