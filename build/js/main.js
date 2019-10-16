"use strict";

const modal = document.querySelector(`.modal`);
const modalForm = modal.querySelector(`.modal__wrapper`);
const openModalButton = document.querySelector(`#open-modal`);
const closeModal = document.querySelector(`.modal__close`);
const body = document.querySelector(`body`);
const firstInput = document.querySelector(`.modal__input`);
const submitButton = document.querySelector(`.modal__submit`);

const textToggles = document.querySelectorAll(`.footer__expand-mark`);

const onModalOverlayClick = (evt) => {
  const isClickInside = modalForm.contains(evt.target);
  if (!isClickInside) {
    modal.style.display = `none`;
    body.style.overflow = `auto`;
    modal.removeEventListener(`click`, onModalOverlayClick);
  }
};

const onTextToggleClick = (e) => {
  const openedList = document.querySelectorAll(`.footer__list--toggle-open`);
  document.querySelector(`.footer__expand-mark--opened`).classList.remove(`footer__expand-mark--opened`);

  for (const toggle of openedList) {
    toggle.classList.remove(`footer__list--toggle-open`);
  }

  const currentBlock = e.target.parentNode;
  const text = currentBlock.querySelector(`.footer__list--toggle`);
  text.classList.add(`footer__list--toggle-open`);
  currentBlock.querySelector(`.footer__expand-mark`).classList.add(`footer__expand-mark--opened`);
};

for (const toggle of textToggles) {
  toggle.addEventListener(`click`, onTextToggleClick);
}

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