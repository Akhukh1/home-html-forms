import Popovers from './popovers';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if (document.querySelector('.popover')) {
    Popovers.removePopover();
    btn.blur();
  } else {
    Popovers.showPopover(btn);
  }
});
