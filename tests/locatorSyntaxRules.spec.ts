
import {test} from '@playwright/test'   


test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})


test ('Locator Syntax Rules' , async({page}) =>{
    //1.  by tag name 
    page.locator('input')

    // 2. by id 
    await page.locator('#inputEmail1').click()

    //3.  by class value 
     page.locator('.shape-rectangle')

    //4. by attribute
    page.locator('[placeholder="Email"]')

    // 5. by claa value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //6. combine different locator --> combine them without space in between 
    page.locator('input#inputEmail1[placeholder="Email"]')

    // 7. by xpath (NOT RECOMENDED)
    page.locator('//*[@id="#inputEmail1"]')

    //8. by partial text match 
    page.locator(':text(Using)')

    //9. by exact text match 
    page.locator(':text-is(Using the Grid)')

})


