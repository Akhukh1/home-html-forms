export default class Popovers {
  showPopover(btn) {
    const popover = document.createElement('div');
    const popoverContainer = document.body.appendChild(popover);
    popoverContainer.classList.add('popover');

    const popoverHeader = popoverContainer.appendChild(document.createElement('h3'));
    popoverHeader.classList.add('popover-header');
    popoverHeader.textContent = 'Popover title';

    const popoverBody = popoverContainer.appendChild(document.createElement('div'));
    popoverBody.classList.add('popover-body');
    popoverBody.textContent = "And here's some amazing content. It's very engaging. Right?";

    const { left, top } = btn.getBoundingClientRect();

    popover.style.left = `${left + btn.offsetWidth / 2 - popover.offsetWidth / 2}px`;
    popover.style.top = `${top - popover.offsetHeight - 7}px`;
  }

  removePopover() {
    const popover = document.querySelector('.popover');
    popover.remove();
  }
}
