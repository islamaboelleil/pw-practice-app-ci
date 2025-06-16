import {test as base} from '@playwright/test'
import { PageManager } from '../pw-practice-app/page-objects/pageManager'

export type Testoptions = {
    globalsQaURL: string
    formLayoutsPage:string
    pageManager: PageManager
}

export const test = base.extend<Testoptions>({
    globalsQaURL: ['', {option: true}],

    formLayoutsPage: async({page}, use) => {
        await page.goto('http://localhost:4200/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
    },

    pageManager: async({page}, use) => {
        const pm = new PageManager(page)
        await use(pm)
        
    }
})