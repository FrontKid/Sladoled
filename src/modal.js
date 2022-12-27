const modalBackdrop = document.querySelector('.is-hidden');
let currentModal = '';

const objModal = {
  'about-card__read-more': '.modal-readmore',
  'site-button__buy': '.modal-buy-now',
  'product__button': '.modal',
  'footer-button__submit footer-button__submit--but1': '.modal-contacts',
  'footer-button__submit footer-button__submit--but2': '.modal-location'
};

document.addEventListener('click', e => {

  if (e.target.matches('[data-open-modal]')) {
    currentModal = e.target.classList.value;
    console.log(currentModal)
    document.querySelector(`${objModal[currentModal]}`).style.display = 'block';
    modalBackdrop.classList.remove('is-hidden');
  }

  console.log(e.target.classList.value)
  if (
    e.target.matches('.backdrop') ||
    e.target.classList.value.includes('close')
  ) {
    modalBackdrop.classList.add('is-hidden');
    document.querySelector(`${objModal[currentModal]}`).style.display = 'none';
  }
});