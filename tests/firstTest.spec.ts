import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})

test('Loctor syntax rules', async({page}) => {
    //by Tag name
    page.locator('input')

    //by ID
    page.locator
})