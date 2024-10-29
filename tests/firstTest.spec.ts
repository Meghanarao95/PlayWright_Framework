import {test} from '@playwright/test'    // imports playwright libraries

// Hooks

 //1.  test.beforeEach --> will run before every test suite /test scenario
 //2.  test.beforeAll --> will be executed just once before the entire test file is executed
 // 3. test.afterEach --> will run after every test suite /test scenario
 //4. test.afterAll --> will be executed just once after the entire test file is executed

 // test.describe --> used to group the suites , can use only and skip methods to run the suites indepenently


test.beforeEach(async({page}) =>{        
    await page.goto('http://localhost:4200/')

})



test.describe( 'suite1' , () =>{

    test.beforeEach(async({page}) =>{

        await page.getByText('Charts').click()
      
    })
    
    test( 'The first Test', async({page}) =>{

        await page.getByText('Form Layouts').click()
      
    })
    
    test( 'Navigate to date picker', async({page}) =>{

        await page.getByText('Datepicker').click()
      
    })
    
  
})

test.describe( 'suite2' , () =>{

    test.beforeEach(async({page}) =>{

        await page.getByText('Charts').click()
      
    })
    
    test( 'The first Test2', async({page}) =>{

        await page.getByText('Form Layouts').click()
      
    })
    
    test( 'Navigate to date picker2', async({page}) =>{

        await page.getByText('Datepicker').click()
      
    })
    
  
})
