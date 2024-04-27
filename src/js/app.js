import Popovers from './popovers';

const popup = new Popovers();

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if (document.querySelector('.popover')) {
    popup.removePopover();
    btn.blur();
  } else {
    popup.showPopover(btn);
  }
});
