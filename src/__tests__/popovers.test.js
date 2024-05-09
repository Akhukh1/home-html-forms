/**
 * @jest-environment jsdom
 */

import Popovers from '../js/popovers';

test('Click button', () => {
  document.body.innerHTML = '<button class = "btn" type="button">Click to toggle popover</button>';

  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    if (document.querySelector('popover')) {
      Popovers.removePopover();
      btn.blur();
    } else {
      Popovers.showPopover(btn);
    }
  });
  btn.click();
  const div = document.querySelector('div');
  expect(div.classList.contains('popover')).toEqual(true);
});
