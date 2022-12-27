const modalReadMoreClose = document.querySelector('.modal-readmore__close');
const modalReadMoreOpen = document.querySelector('.about-card__read-more');
const modalReadMore = document.querySelector('.modal-readmore');
const modalBackdrop = document.querySelector('.is-hidden');
modalReadMore.addEventListener('click', e => e.stopPropagation());

const closeBtn = () => {
  modalReadMore.style.display = 'none';
  modalBackdrop.classList.add('is-hidden');
};

modalReadMoreOpen.addEventListener('click', () => {
  modalReadMore.style.display = 'block';
  modalBackdrop.classList.remove('is-hidden');
});

modalReadMoreClose.addEventListener('click', () => {
  console.log(222);
  closeBtn();
});

document.addEventListener('click', e => {
  if (e.target.matches('.backdrop')) {
    console.log(111);
    closeBtn();
  }
});