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

 
  test('Check if the "Sign up for our newsletter" section is present', async () => {
    const newsletterSection = await page.$('section')
    expect(newsletterSection).toBeTruthy()
  })



  test('Check if the email input field has a correct placeholder', async () => {
    const input = await page.$('input')
    const placeholder = await input.getAttribute('placeholder')
    expect(placeholder).toBe('Enter your email')
  });


})
