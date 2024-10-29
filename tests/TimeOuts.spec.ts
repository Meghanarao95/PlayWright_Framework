
import {expect, test} from '@playwright/test'


test.beforeEach(async({page}) => {

    await page.goto('http://uitestingplayground.com/ajax')
   await page.getByText('Button Triggering AJAX Request').click()
    
})


test('TimeOuts' ,async({page}) =>{


     // default test timeout- 30 secs 
     // time taken for complete the click for successButton is 15secs - test passed

    const successButton = page.locator('.bg-success')
     await successButton.click()
})