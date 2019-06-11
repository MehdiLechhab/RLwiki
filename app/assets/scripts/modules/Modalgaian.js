import $ from 'jquery';

// Haseldan
class Modalgaian {
	constructor() {
		this.openModalButton = $(".open-modal--gaian");
		this.modal = $(".modalgaian");
		this.closeModalButton = $(".modalgaian__close");
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
		this.modal.addClass("modalgaian--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalgaian--is-visible");
	}
}

export default Modalgaian;