import {expect, test} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { privateDecrypt } from 'crypto'
import { group } from 'console'
import { faker } from '@faker-js/faker'
import { argosScreenshot } from "@argos-ci/playwright";

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:51879/')
})

test('navigate to form page', async({page}) =>{
    const pm = new PageManager(page)
    await pm.navigateTo().formlayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods', async({page}) =>{
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomFEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formlayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'option 1')
    await pm.onFormLayoutsPage().submitInineFormWithNameEmailAndCheckbox(randomFullName, randomFEmail, true)
    await pm.navigateTo().datepickerPage()
    await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
    await pm.onDatepickerPage().selectDatePickerWithRangeFromToday(6, 15)

})
test.only('testing with argos ci', async({page}) =>{
    const pm = new PageManager(page)
    await pm.navigateTo().formlayoutsPage()
    await argosScreenshot(page, "form layouts Page");
    await pm.navigateTo().datepickerPage()
    await argosScreenshot(page, "datepicker Page");
})