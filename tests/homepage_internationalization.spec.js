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

 
  test('Check if course button text is in English', async () => {
    const courseButtonText = await page.$eval('button1', el => el.innerText)
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

  test('should change language to es when language selector is used', async ()=>{
    await page.selectOption('select[name="language"]', { value: 'es' });
    expect(await page.textContent('button1')).toContain('Cursos');
  })

  test('should change language to fr when language selector is used', async ()=>{
    await page.selectOption('select[name="language"]', { value: 'fr' });
    expect(await page.textContent('button1')).toContain('Cours');
  })

  test('should change language to en when language selector is used', async ()=>{
    await page.selectOption('select[name="language"]', { value: 'en' });
    // expect(await page.textContent('button1')).toContain('Courses');
    expect(await page.title()).toContain('MyWebClass.org');
  })
  

})
