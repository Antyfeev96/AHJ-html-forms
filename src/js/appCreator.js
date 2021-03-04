/* eslint-disable prefer-template */
export default class AppCreator {
  constructor() {
    this.html = `
      <div class='container'>
        <button type='submit' class='container__button'>Click me if you want to popover</button>
        <div class='container__popup hidden'>
          <div class='container__popuptitle' id='popuptitle'>Popup title</div>
          <div class='container__popuptext' id='popuptext'></div>
          <div class='container__arrow'></div>
        </div>
      </div>
    `;
    this.errorMessage = {
      errorTitle: 'Тут есть какой-то title',
      valueMissing: 'Тут есть какая-то ошибка',
    };
  }

  init() {
    document.body.innerHTML = this.html;
    this.button = document.querySelector('.container__button');
    this.popup = document.querySelector('.container__popup');
    this.popupTitle = this.popup.querySelector('.container__popuptitle');
    this.popupText = this.popup.querySelector('.container__popuptext');
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      const coords = this.button.getBoundingClientRect();
      this.popup.style.top = -coords.top - 10 + 'px';
      this.popupTitle.textContent = this.errorMessage.errorTitle;
      this.popupText.textContent = this.errorMessage.valueMissing;
      this.popup.classList.toggle('hidden');
      this.button.classList.toggle('active');
    });
  }
}
