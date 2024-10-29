import {expect, test} from '@playwright/test'


test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    
})


test('Extracting Values',async({page}) =>{

    //1. single text value - To get the single text content from the Webpage

    const basicForm = page.locator('nb-card').filter({hasText:'Basic form'})
    const buttonText = await basicForm.locator('button').textContent()
    await expect(buttonText).toEqual('Submit')

    // 2. all text values - Used to get all the options with that particular name

    const allRadioButtonLabels = await page.locator('nb-radio').allTextContents()
    await expect(allRadioButtonLabels).toContain('Option 1')

    // 3.  Input Values - used to fect the textbox values which are entered by the user

    const emailField = basicForm.getByRole('textbox', {name:'Email'})
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    await expect(emailValue).toEqual('test@test.com')

    //4 . getAttribute 

    const placeHolderValue = await emailField.getAttribute('placeholder')
    await expect(placeHolderValue).toEqual('Email')










})