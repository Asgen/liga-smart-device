const modal = document.querySelector(`.modal`);
const modalForm = modal.querySelector(`.modal__wrapper`);
const openModalButton = document.querySelector(`#open-modal`);
const closeModal = document.querySelector(`.modal__close`);
const body = document.querySelector(`body`);
const firstInput = document.querySelector(`.modal__input`);
const submitButton = document.querySelector(`.modal__submit`);

const onModalOverlayClick = (evt) => {
  const isClickInside = modalForm.contains(evt.target);
  if (!isClickInside) {
    modal.style.display = `none`;
    body.style.overflow = `auto`;
    modal.removeEventListener(`click`, onModalOverlayClick);
  }
};

openModalButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  modal.style.display = `block`;
  firstInput.focus();
  body.style.overflow = `hidden`;

  modal.addEventListener(`click`, onModalOverlayClick);

});

closeModal.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  modal.style.display = `none`;
  body.style.overflow = `auto`;
  modal.removeEventListener(`click`, onModalOverlayClick);

});

submitButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  modal.style.display = `none`;
  body.style.overflow = `auto`;

});
