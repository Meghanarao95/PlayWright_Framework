import {test} from '@playwright/test'



test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    
})



test ('Clild Elements', async ({page}) =>{

// 1. using space for parent and child tags 
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()

// 2. using chaining methods to find the clicd element 
await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

// 3. using the parent and the user facing locator combo - avoid  as we will not know what the 1st element will be 

await page.locator('nb-card').getByRole('button',{name :'Sign In'}).first().click()


// 4. by using index for finding the click tag  -- avoid  as we will not know what the  element will be at the index

// index starts from 0 
await page.locator('nb-card').nth(3).getByRole('button').click()


})




