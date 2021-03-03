/* eslint-disable prefer-template */
export default class AppCreator {
  constructor() {
    this.html = `
      <form class='container'>
        <button type='submit' class='container__button'>Click me if you want to popover</button>
        <input type='text' class='container__input' placeholder='login' required>
        <div class='container__popup hidden'>
          <div class='container__popuptitle' id='popuptitle'>Popup title</div>
          <div class='container__popuptext' id='popuptext'>Popup text</div>
          <div class='container__arrow'></div>
        </div>
      </form>
    `;
    this.errorMessage = {
      valueMissing: 'Тут пусто',
    };
  }

  init() {
    document.body.innerHTML = this.html;
    this.button = document.querySelector('.container__button');
    this.form = document.querySelector('form');
    this.input = document.querySelector('input');
    this.popup = document.querySelector('.container__popup');
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      const errorInput = [...this.form.elements].find((el) => !el.validity.valid);
      const coords = this.button.getBoundingClientRect();
      this.popup.style.top = (coords.top - coords.top * 2.25) + 'px';
      if (errorInput) {
        this.popup.classList.toggle('hidden');
        this.button.classList.toggle('active');
      }
    });
  }
}
