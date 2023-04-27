import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'

test.describe('Internationalization tests', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto(config.use.baseURL) // Use the baseURL from the configuration
    await page.setViewportSize({ width: 1280, height: 800 })
  })

  test.afterEach(async () => {
    await page.close()
  })

  /*
  test('Check language attribute of HTML tag', async () => {
    const langAttribute = await page.$eval('html', el => el.getAttribute('lang'))
    expect(langAttribute).toBe('en')
  })
  */

  test('Check if course button text is in English', async () => {
    const courseButtonText = await page.$eval('button', el => el.innerText)
    expect(courseButtonText).toBe('Courses')
  })

  test('Check if newsletter section heading is in English', async () => {
    const newsletterHeading = await page.$eval('h2', el => el.innerText)
    expect(newsletterHeading).toBe('Sign up for our newsletter')
  })

  test('Check if email input placeholder is in English', async () => {
    const emailPlaceholder = await page.$eval('input[type="email"]', el => el.getAttribute('placeholder'))
    expect(emailPlaceholder).toBe('Enter your email')
  })

  test('Check "Sign up" button', async () => {
    const signUpButton = await page.$('button:has-text("Sign up")')
    expect(signUpButton).toBeTruthy()

    const text = await signUpButton.innerText()
    expect(text).toBe('Sign up')
  })

})