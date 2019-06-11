import $ from 'jquery';

// Haseldan
class Modalmadr {
	constructor() {
		this.openModalButton = $(".open-modal--madrasian");
		this.modal = $(".modalmadr");
		this.closeModalButton = $(".modalmadr__close");
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
		this.modal.addClass("modalmadr--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalmadr--is-visible");
	}
}

export default Modalmadr;