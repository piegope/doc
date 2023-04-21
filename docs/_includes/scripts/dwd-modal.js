const dwdModal = {
  init: function () {
    const elements = document.querySelectorAll('[data-dwd-modal]');
    document.addEventListener('click', dwdModal.closeAll.bind());

    for (let element of elements) {
      element.addEventListener(
        'click',
        dwdModal.modal.bind({
          element: element,
        })
      );
    }
  },
  closeAll: function (e) {
    const hasAncestor = isAncestorFound(e.target, null, 'data-dwd-modal-group');
    const hasGroup = e.target.hasAttribute('data-dwd-modal-group');

    if (!hasAncestor && !hasGroup) {
      const targets = document.querySelectorAll('[data-dwd-modal-group]');

      for (let target of targets) {
        target.classList.remove('active');
      }
    }
  },
  modal: function () {
    const element = this.element;
    const id = element.getAttribute('data-dwd-modal-target');
    const group = element.getAttribute('data-dwd-modal-group');
    const targets = document.querySelectorAll(
      '[data-dwd-modal-group="' + group + '"]'
    );

    for (let target of targets) {
      let targetId = target.getAttribute('data-dwd-modal-target');

      if (targetId === id) {
        target.classList.toggle('active');
      } else {
        target.classList.remove('active');
      }
    }
  },
};

function isAncestorFound(el, cls, dataAttr) {
  dataAttr = dataAttr || null;
  if (dataAttr) {
    while ((el = el.parentElement) && !el.getAttribute(dataAttr));
    if (el == null) {
      return false;
    }
  } else {
    while ((el = el.parentNode) && !el.classList.contains(cls));

    if (el == null) {
      return false;
    }
  }

  return true;
}

(function () {
  dwdModal.init();
})();