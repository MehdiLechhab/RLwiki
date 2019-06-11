import $ from 'jquery';

// Metal Scroom
class Modalms {
	constructor() {
		this.openModalButton = $(".open-modal--ms");
		this.modal = $(".modalms");
		this.closeModalButton = $(".modalms__close");
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
		this.modal.addClass("modalms--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalms--is-visible");
	}
}

export default Modalms;