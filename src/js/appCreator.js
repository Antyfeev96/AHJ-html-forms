/* eslint-disable no-unused-vars */
import luhnAlgorithm from './luhnAlgoritm';
import validator from './validator';

export default class AppCreator {
  constructor() {
    this.html = `
    <div class="cards">
      <div class="cards__title">Check your credit card number</div>
      <div class="cards__logos">
          <img src="/src/images/visa.png" alt="visa" class="cards__logo">
          <img src="/src/images/mastercard.png" alt="mastercard" class="cards__logo">
          <img src="/src/images/american_express.png" alt="american_express" class="cards__logo">
          <img src="/src/images/discover.png" alt="discover" class="cards__logo">
          <img src="/src/images/jcb.png" alt="jcb" class="cards__logo">
          <img src="/src/images/dinersclub.jpg" alt="dinersclub" class="cards__logo">
      </div>
    </div>
    <form class="form">
      <input id="input" type="text" class="form__input" placeholder="Credit card number">
      <button id="button" type="button" class="form__button">Click to Validate</button>
    </form>
    `;
    this.init();
  }

  init() {
    document.body.innerHTML = this.html;
    this.input = document.getElementById('input');
    this.button = document.getElementById('button');
    this.array = Array.from(document.querySelectorAll('img'));

    this.button.addEventListener('click', (event) => {
      event.preventDefault();

      this.array.forEach((element) => element.classList.remove('active'));

      if (validator(this.input.value) && luhnAlgorithm(this.input.value)) {
        const element = validator(this.input.value);
        element.classList.add('active');
      }
    });
  }
}
