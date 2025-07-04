import {expect, test} from '@playwright/test'


test('input fields', async({page}, testinfo) => {

        await page.goto('http://localhost:4200/')
        if(testinfo.project.name == 'mobile'){
        await page.locator('.sidebar-toggle').click()
        }
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        if(testinfo.project.name == 'mobile'){
        await page.locator('.sidebar-toggle').click()
        }        
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('test2@test.com')

    })
