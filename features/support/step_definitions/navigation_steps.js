
const { Given, Then } = require('cucumber')
const expect = require('expect-puppeteer')
const scope = require('../scope')
const constants = require('../constants')
const action = require('../action')

Given(`Open homepage for home page of calculator`, async () => {
    const { page } = scope

    let env = process.env.NODE_ENV
    console.log('ENV: ' + env)
    let url = constants.baseUrl
    console.log('BASEURL----> ' + url);
    await page.goto( url, { waitUntil: 'networkidle0', timeout: 60000 })

    // await Promise.all([
    //   page.waitForNavigation({waitUntil: 'networkidle0'})
    // ]);

    // await page.waitForNavigation({waitUntil: 'networkidle0'})
    // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    // console.log('bodyHTML======> ' + bodyHTML);

    // await page.waitForSelector('[data-test-id=section_heading_wrapper]', { visible: true })

})