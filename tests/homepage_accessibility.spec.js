import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'

test.describe('Accessibility tests', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto(config.use.baseURL) // Use the baseURL from the configuration
    await page.setViewportSize({ width: 1280, height: 800 })
  })

  test.afterEach(async () => {
    await page.close()
  })

  test('Check if the "Transform your teaching" header is present', async () => {
    const header = await page.$('h1')
    expect(header).toBeTruthy()
  })

  test('Check if the "Transform your teaching" header has the correct font size', async () => {
    const fontSize = await page.$eval('h1', (el) => parseFloat(getComputedStyle(el).fontSize))
    expect(fontSize).toBeGreaterThan(25)
  })

  test('Check if the "Transform your teaching" paragraph is present', async () => {
    const paragraph = await page.$('p')
    expect(paragraph).toBeTruthy()
  })

  test('Check if the "Sign up for our newsletter" section is present', async () => {
    const newsletterSection = await page.$('section')
    expect(newsletterSection).toBeTruthy()
  })

/*
  test('Check if the email input field is labeled correctly', async () => {
    const input = await page.$('input')
    const label = await page.$('label[for="Enter your email"]')
    const inputId = await input.getAttribute('id')
    const labelFor = await label.getAttribute('for')
    expect(inputId).toBe(labelFor)
  })
*/

  test('Check if the email input field has a correct placeholder', async () => {
    const input = await page.$('input')
    const placeholder = await input.getAttribute('placeholder')
    expect(placeholder).toBe('Enter your email')
  });

/*
 <button id="signup-button"  style={{padding: '8px 16px',borderRadius: '4px',backgroundColor: '#0070f3',color: 'white',border: 'none',cursor: 'pointer' }}>
  Sign up
  </button>


 test('Check if the newsletter signup button is labeled correctly', async () => {
  await page.waitForSelector('#signup-button');
  const button = await page.$('#signup-button');
  const buttonText = await button.textContent();
  expect(buttonText).toBe('Sign up');
}); */

/*
 test('Check if the newsletter signup button is labeled correctly', async () => {
  const buttons = await page.$$('#signup-button');
  const signupButton = buttons.find(async button => {
    const buttonText = await button.textContent();
    return buttonText === 'Sign up';
  });
  expect(signupButton).toBeTruthy();
});
*/

/*
  <button id="newsletter-btn"  style={{padding: '8px 16px',borderRadius: '4px',backgroundColor: '#0070f3',color: 'white',border: 'none',cursor: 'pointer' }}>
  Sign up
  </button>

  test('Check if the newsletter signup button is labeled correctly', async () => {
  const button = await page.$('#newsletter-btn')
  console.log(button)
  const buttonText = await button.textContent()
  console.log(buttonText)
  expect(buttonText).toBe('Sign up')
})

*/
/*
  test('Check if the newsletter signup button is labeled correctly', async () => {
    const button = await page.$('button')
    const buttonText = await button.textContent()
    expect(buttonText).toBe('Sign up')
  })
  */
})
