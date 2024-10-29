import {expect, test} from '@playwright/test'


test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    
})



test ('Assertions', async ({page}) =>{

    const basicFormButton = page.locator('nb-card').filter({hasText:'Basic form'}).locator('button')

 // 1. General Assertions
 
  const value = 5
  expect(value).toEqual(5)

  const text = await basicFormButton.textContent()
  await expect(text).toEqual('Submit')

 // Locator Assertions - waits for 5 secs 

  await expect(basicFormButton).toHaveText('Submit')

  // Soft Assertion - Continues the execution even if the assertion fails 

  await expect.soft(basicFormButton).toHaveText('Submit')
  await basicFormButton.click()




})