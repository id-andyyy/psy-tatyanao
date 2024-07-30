function modal() {
  const bodyNode = document.querySelector('body');
  const modalButtonsNode = document.querySelectorAll('.modal-button');
  const modalCloseNode = document.querySelectorAll('.modal__close');

  let unlock = true;
  const timeout = 300;

  if (modalButtonsNode) {
    modalButtonsNode.forEach(currentModalButtonNode => {
      currentModalButtonNode.addEventListener('click', e => {
        const modalName = currentModalButtonNode.getAttribute('data-modal');
        const modalNode = document.querySelector(`#${modalName}`);
        modalOpen(modalNode);
      });
    });
  }

  if (modalCloseNode) {
    modalCloseNode.forEach(currentModalCloseNode => {
      currentModalCloseNode.addEventListener('click', e => {
        modalClose(currentModalCloseNode.closest('.modal'));
      });
    });
  }

  document.addEventListener('keydown', e => {
    if (e.code == 'Escape') {
      const modalActiveNode = document.querySelector('.modal.modal-active');
      modalClose(modalActiveNode);
    }
  });

  function modalOpen(currentModalNode) {
    if (currentModalNode && unlock) {
      bodyLock()

      currentModalNode.classList.add('modal-active');
      currentModalNode.addEventListener('click', e => {
        if (!e.target.closest('.modal__content')) {
          modalClose(e.target.closest('.modal'));
        }
      });
    }
  }

  function modalClose(currentModalNode) {
    if (currentModalNode && unlock) {
      currentModalNode.classList.remove('modal-active');
      bodyUnlock();
    }
  }

  function bodyLock() {
    bodyNode.classList.add('lock');

    safeUnlock();
  }

  function bodyUnlock() {
    setTimeout(() => {
      bodyNode.classList.remove('lock');
    }, timeout);

    safeUnlock();
  }

  function safeUnlock() {
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }
}

export default modal;