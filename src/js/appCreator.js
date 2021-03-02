export default class AppCreator {
  constructor() {
    this.html = `
      <form class='container'>
        <button type='submit' class='container__button'>Click me if you want to popover</button>
        <input type='text' class='container__input' placeholder='login' required>
        <div class='popup hidden'></div>
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
    this.button.addEventListener('click', () => {
      const errorInput = [...this.form.elements].find((el) => !el.validity.valid);
      console.log(this.form.elements);
      errorInput.setCustomValidity(this.errorMessage.valueMissing);
      this.button.classList.toggle('active');
    });
  }
}
