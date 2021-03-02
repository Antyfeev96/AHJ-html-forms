export default class AppCreator {
  constructor() {
    this.html = `
      <form class='container'>
        <input type='text' placeholder='login' required>
        <button type='submit' class='container__button'>Click me if you want to popover</button>
      </form>
    `;
  }

  init() {
    document.body.innerHTML = this.html;
    this.button = document.querySelector('.container__button');
    this.button.addEventListener('click', (e) => {
      // e.preventDefault();
      this.button.classList.toggle('active');
    });
  }
}
