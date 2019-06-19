const { Given, Then } = require('cucumber')
const expect = require('expect-puppeteer')
const scope = require('../scope')



Given(/^You select application type as "([^"]*)?"$/, async (appType) => {

    await scope.page.evaluate(() => {
        document.querySelector('[id="application_type_single"]').click();
})
})

Given(/^I wait for "([^"]*)?" seconds?$/, async (time) => {
    await scope.page.waitFor(parseInt(time * 1000))
})

Given(/^I see heading "([^"]*)?"$/, async (heading) => {
    await scope.page.$('h1')
})



Given(/^Enter you income as "([^"]*)?"$/, async (amount) => {
     const inputValue =  await scope.page.$('input[aria-labelledby="q2q1"]')
       inputValue.click()
       inputValue.type(amount)
})


Given(/^Enter other income as "([^"]*)?"$/, async (amount) => {
    const inputValue =  await scope.page.$('input[aria-labelledby="q2q2"]')
inputValue.click()
inputValue.type(amount)
})


Given(/^Enter living expenses as "([^"]*)?"$/, async (amount) => {
    const inputValue =  await scope.page.$('input[aria-labelledby="q3q1"]')
inputValue.click()
inputValue.type(amount)
})


Given(/^Current home loan repayments as "([^"]*)?"$/, async (amount) => {
    const inputValue =  await scope.page.$('input[aria-labelledby="q3q2"]')
inputValue.click()
inputValue.type(amount)
})


Given(/^Other commitments as "([^"]*)?"$/, async (amount) => {
    const inputValue =  await scope.page.$('input[aria-labelledby="q3q3"]')
inputValue.click()
inputValue.type(amount)
})


Given(/^tolal credit card limit as "([^"]*)?"$/, async (amount) => {
    const inputValue =  await scope.page.$('input[aria-labelledby="q3q5"]')
inputValue.click()
inputValue.type(amount)
})


Given(/^You select property you would like to buy as "([^"]*)?"$/, async (appType) => {

    await scope.page.evaluate(() => {
        document.querySelector('[id="borrow_type_home"]').click();
})
})



Given(/^Number of dependent as "([^"]*)?"$/, async (Val) => {

    const dropDownSelectElement = await scope.page.select('[title="Number of dependants"]', Val)

})

Given(/^I click on button "([^"]*)?"$/, async (btnName) => {

    const buttonClick = await scope.page.click('button[class="btn btn--action btn--borrow__calculate"]')


})



