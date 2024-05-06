/**
 * @jest-environment jsdom
 */

import Popovers from '../js/popovers';

test('Click button', () => {
  document.body.innerHTML = '<button class = "btn" type="button">Click to toggle popover</button>';

  const popup = new Popovers();

  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    if (document.querySelector('popover')) {
      popup.removePopover();
      btn.blur();
    } else {
      popup.showPopover(btn);
    }
  });
  btn.click();
  const div = document.querySelector('div');
  expect(div.classList.contains('popover')).toEqual(true);
});
