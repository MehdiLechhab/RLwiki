import $ from 'jquery';

// Castellan
class Modalcas {
	constructor() {
		this.openModalButton = $(".open-modal--castellan");
		this.modal = $(".modalcas");
		this.closeModalButton = $(".modalcas__close");
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
		this.modal.addClass("modalcas--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modalcas--is-visible");
	}
}




export default Modalcas;
