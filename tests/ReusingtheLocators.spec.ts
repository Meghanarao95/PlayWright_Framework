

import {test,expect} from '@playwright/test'



test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    
})




test ('Reusing Locators', async ({page}) =>{
   
const basicForm = page.locator('nb-card').filter({hasText:'Basic form'})
const emailField = basicForm.getByRole('textbox',{name:"Email"})
const passworrdField =basicForm.getByRole('textbox',{name:"Password"})

    await emailField.fill('test@test.com')

    await passworrdField.fill('Welcome123')

    await basicForm.locator('nb-checkbox').click()

    await basicForm.getByRole('button').click()

    // assertion 

    await expect(emailField).toHaveValue('test@test.com')







})