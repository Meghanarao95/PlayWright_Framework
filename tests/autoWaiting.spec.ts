

import {expect, test} from '@playwright/test'


test.beforeEach(async({page}) => {

    await page.goto('http://uitestingplayground.com/ajax')
   await page.getByText('Button Triggering AJAX Request').click()
    
})


test('Auto Waiting' ,async({page}) =>{

      const successButton = page.locator('.bg-success')
    //  await successButton.click()


     // 1. with textContent()

     const text = await successButton.textContent()

      // 2. with allTextContents()
    //   await successButton.waitFor({state:"attached"})

    //   const text = await successButton.allTextContents()
    //   expect(text).toContain('Data loaded with AJAX get request.')

      // 3. tohaveText - locator assertion - waits for 5 secs 

      // await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000})



      
})

test('Alternative Wait' ,async({page}) =>{
    // Alternative Waits 

    const successButton = page.locator('.bg-success')

    // 1. wait for the element 

   // await page.waitForSelector('.bg-success')
    
    // 2. wait for the particular api response from the network tab 

      await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

   // 3. wait for all the network calls to be completed (NOT RECOMMENDED)

      await page.waitForLoadState('networkidle')


    const text = await successButton.allTextContents()
     expect(text).toContain('Data loaded with AJAX get request.')



})