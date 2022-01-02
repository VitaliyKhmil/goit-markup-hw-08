(() => {
  const refs = {
    openModalBtn: document.querySelector('.open-menu-btn'),
    closeModalBtn: document.querySelector('.close-menu-btn'),
    modal: document.querySelector('.mob-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();