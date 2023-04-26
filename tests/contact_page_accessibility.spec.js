// Import the Playwright configuration
import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'

test.describe('Accessibility tests', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto(config.use.baseURL + '/contact') // Use the Contact page URL
    await page.setViewportSize({ width: 1280, height: 800 })
  })

  test.afterEach(async () => {
    await page.close()
  })

  test('Check form labels and inputs', async () => {
    // Check that each label element has a corresponding input element
    const labelElements = await page.$$('.form_fields label')
    for (const labelElement of labelElements) {
      const inputId = await labelElement.getAttribute('for')
      expect(inputId).toBeTruthy()
      const inputElement = await page.$(`#${inputId}`)
      expect(inputElement).toBeTruthy()
    }

    // Check that each input element has a label element
    const inputElements = await page.$$('.form_fields input, .form_fields textarea')
    for (const inputElement of inputElements) {
      const labelElement = await inputElement.$('xpath=preceding-sibling::label')
      expect(labelElement).toBeTruthy()
    }
  })

/*
  test('Check Submit button', async () => {
    const submitButton = await page.$('.button')
    expect(submitButton).toBeTruthy()
  }) */

  test('Check accessibility tree for Contact page', async () => {
    const snapshot = await page.accessibility.snapshot()
    console.log('Accessibility tree for Contact page:', JSON.stringify(snapshot, null, 2))
  })

  test('Check page accessibility', async () => {
    const snapshot = await page.accessibility.snapshot()
    console.log('Accessibility tree for Contact page:', JSON.stringify(snapshot, null, 2))
  })
})
