const { Given, Then } = require('cucumber')
const expect = require('expect-puppeteer')
const scope = require('../scope')
const chai = require('chai')



Given(/^I should see the estimate as "([^"]*)?"$/, async (estVal) => {

       const estValue = await scope.page.$('span[class="borrow__result__text__amount"]')
       const val = await scope.page.evaluate(estValue => estValue.textContent, estValue)
       chai.expect(val).to.equal(estVal);
})




Given(/^All the fields should reset$/, async () => {
    const inval  = '0'
    const estValue = await scope.page.$('input[aria-labelledby="q2q1"]')
    const val = await scope.page.evaluate(estValue => estValue.getAttribute('value'), estValue)
    chai.expect(val).to.equal(inval);

    const estValue1 = await scope.page.$('input[aria-labelledby="q2q2"]')
    const val1 = await scope.page.evaluate(estValue1 => estValue1.getAttribute('value'), estValue1)
    chai.expect(val1).to.equal(inval);


})


Given(/^I should see the estimate a error "([^"]*)?"$/, async (error) => {
    const estValue = await scope.page.$('span[class="borrow__error__text"]')
const val = await scope.page.evaluate(estValue => estValue.textContent, estValue)
chai.expect(val.trim()).to.equal(error);

})

