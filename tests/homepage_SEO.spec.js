import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'

test.describe('SEO tests', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto(config.use.baseURL)
    await page.setViewportSize({ width: 1280, height: 800 })
  })

  test.afterEach(async () => {
    await page.close()
  })


  test('Check image alt tags', async () => {
    const images = await page.$$('img')
    for (const image of images) {
      const altText = await image.getAttribute('alt')
      expect(altText).toBeTruthy()
    }
  })

  test('Check header tag hierarchy', async () => {
    const h1Count = await page.$$('h1')
    const h2Count = await page.$$('h2')
    const h3Count = await page.$$('h3')

    expect(h1Count.length).toBe(1)
    expect(h2Count.length).toBeGreaterThan(0)
    expect(h3Count.length).toBeGreaterThan(0)
  })

  test('Check internal links', async () => {
    const internalLinks = await page.$$('a[href^="/"]')
    for (const link of internalLinks) {
      const linkUrl = await link.getAttribute('href')
      expect(linkUrl).toBeTruthy()
    }
  })

  test('Check external links', async () => {
    const externalLinks = await page.$$('a[href^="http"]')
    for (const link of externalLinks) {
      const linkUrl = await link.getAttribute('href')
      expect(linkUrl).toBeTruthy()
    }
  })


})
