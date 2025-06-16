import {Page} from '@playwright/test'

export class formLayoutsPage {

    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string){
        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password)
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
        await usingTheGridForm.getByRole('button').click()

    }

    async submitInineFormWithNameEmailAndCheckbox(name: string, email: string, remeberMe: boolean){
        const inlineForm = this.page.locator('nb-card', {hasText: "inline form"})
        await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await inlineForm.getByRole('textbox', {name: "Email"}).fill(email)
        if(remeberMe)
            await inlineForm.getByRole('checkbox').check({force: true})
            await inlineForm.getByRole('button').click()

}
}