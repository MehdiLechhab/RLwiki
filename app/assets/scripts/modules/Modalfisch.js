import $ from 'jquery';

// Haseldan
class Modalfisch {
	constructor() {
		this.openModalButton = $(".open-modal--fischeran");
		this.modal = $(".modalfisch");
		this.closeModalButton = $(".modalfisch__close");
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
		this.modal.addClass("modalfisch--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalfisch--is-visible");
	}
}

export default Modalfisch;