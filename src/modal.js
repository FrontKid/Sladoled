(() => {
  let openModalClassName = '';
  const objModal = {
    'about-card__read-more': '.modal-readmore',
    'site-button__buy': '.modal-buy-now',
    'product__link': '.modal',
    'mobile-button__buy': '.modal-buy-now',
    'footer-button__submit--but1': '.modal-location',
    'footer-button__submit--but2': '.modal-contacts',
  };

  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-modal]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelectorAll('[data-modal-window]'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', e => {

      openModalClassName = e.target.classList[0];

      if (objModal[openModalClassName]) {

        toggleModal();
      }
    });
  });

  refs.closeModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.backdrop.addEventListener('click', toggleModal);

  refs.modal.forEach(btn => {
    btn.addEventListener('click', e => e.stopPropagation());
  });

  function toggleModal() {
    document
      .querySelector(`${objModal[openModalClassName]}`)
      .classList.toggle('modal-hidden');

    refs.backdrop.classList.toggle('is-hidden');
  }
})();
