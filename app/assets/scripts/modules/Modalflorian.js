import $ from 'jquery';

// Florian
class Modalflorian {
	constructor() {
		this.openModalButton = $(".open-modal--florian");
		this.modal = $(".modalflorian");
		this.closeModalButton = $(".modalflorian__close");
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
		this.modal.addClass("modalflorian--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalflorian--is-visible");
	}
}

export default Modalflorian;