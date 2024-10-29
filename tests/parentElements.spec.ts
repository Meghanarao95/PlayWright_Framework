import {test} from '@playwright/test'


test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    
})



test ('Locating Parent Elements', async ({page}) =>{
   

    // First Approach

    //1. using "hastext" as 2nd attribute and mention title of the element as it shows in the parent tag  
    await page.locator('nb-card',{hasText:"Using the Grid"}).getByRole('textbox',{name:"Email"}).click()

    //2. using the "has: page.locator" as 2nd attribute and mention identify the unique element 

    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox',{name:"Email"}).click()


    // Second Approach

    // 1. using the decidated method called as "fliter()" and "hasText"

    await page.locator('nb-card').filter({hasText:'Basic form'}).getByRole('textbox',{name:"Email"}).click()

    // 2. using the decidated method called as "fliter()" and page.locator

    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox',{name:"Password"}).click()


    // 3. Using filer method multiple times to get the exact element to me clicked

    await page.locator('nb-card').filter({has:page.locator('nb-checkbox')}).filter({hasText:"Sign In"})
    .getByRole('textbox',{name:"Email"}).click()


    // 4. Uing the xpath 

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox',{name:"Email"}).click()


})