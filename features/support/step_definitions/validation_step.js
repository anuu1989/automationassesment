const { Given, Then } = require('cucumber')
const expect = require('expect-puppeteer')
const scope = require('../scope')



Given(/^I should see the estimate as "([^"]*)?"$/, async (estVal) => {
    const page = scope.page
    const field = await find.textFieldWithLabel(page, 'We estimate you could borrow:')
   const getValue = await (await field.getProperty('value')).jsonValue()

})
