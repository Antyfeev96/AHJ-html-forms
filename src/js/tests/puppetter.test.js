import puppetter from 'puppeteer';
import { fork } from 'child_process';
import AppCreator from '../appCreator';

jest.setTimeout(30000);
describe('Card checker', () => {
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
      // headless: true,
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
    test('card checker', async () => {
      await page.goto(baseUrl);
      const app = new AppCreator();
      app.init();
      const input = await page.$('input');
      const button = await page.$('button');
      await input.type('5321300341660715');
      await button.click();
      await page.waitForSelector('.active');
    });
  });
});
