import {test} from '../test-options'
import { privateDecrypt } from 'crypto'
import { group } from 'console'
import { faker } from '@faker-js/faker'


test('parametrized methods', async({pageManager, formLayoutsPage}) =>{
    const randomFullName = faker.person.fullName()
    const randomFEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'option 1')
    await pageManager.onFormLayoutsPage().submitInineFormWithNameEmailAndCheckbox(randomFullName, randomFEmail, true)

})
