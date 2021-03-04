import puppetter from 'puppeteer';
import { fork } from 'child_process';
import AppCreator from '../appCreator';

jest.setTimeout(30000);
describe('app checker', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetter.launch({
      // headless: false,
      // slowMo: 200,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  describe('test', () => {
    test('components should be rendered', async () => {
      await page.goto(baseUrl);
      const app = new AppCreator();
      app.init();
      const button = await page.$('.container__button');
      const popup = await page.$('.container__popup');
      expect(button).not.toBe(null);
      expect(popup).not.toBe(null);
      await button.click();
      const hidden = await page.$('container__popup hidden');
      expect(hidden).toBe(null);
    });
  });
});
