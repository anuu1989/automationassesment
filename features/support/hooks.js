const {BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status} = require('cucumber')
const scope = require('./scope')
let constants = require('./constants.js')
const fse = require('fs-extra')
let counter;

BeforeAll(async () => {
    const puppeteer = require('puppeteer');
    scope.driver = puppeteer;
    counter=0;
    // scope.browser = await scope.driver.launch({ headless: true})
    // ignoreHTTPSErrors flag required for SIT testing

    // let chromiumpath = constants.chromiumpath;
    // scope.browser = await scope.driver.launch({headless: constants.headlessMode, ignoreHTTPSErrors: true,
    //  // executablePath: chromiumpath,
    //   args: [ '--no-sandbox',
    //     '--disable-setuid-sandbox',
    //     // debug logging
    //     '--enable-logging', '--v=1'
    //   ]})

    let launchProperties = {
        headless: constants.headlessMode,
        ignoreHTTPSErrors: true,
        args: [ '--no-sandbox',
            '--disable-setuid-sandbox',
            // debug logging
            // '--enable-logging', '--v=1'
        ],
        // set 'devtools: true' => if you want to be able to launch the dev tools console too
        //  just need to add 'await scope.page.evaluate(() => {debugger})' to the step
        //  you want to stop at
        devtools: false
    }

    // if chromiumPath is not empty, set executablePath to chromiumPath
    if(constants.chromiumPath !== '') {
        launchProperties.executablePath = constants.chromiumPath
    }

    scope.browser = await scope.driver.launch(launchProperties)
    setDefaultTimeout(constants.pageTimeout)



    // *************************************** \\
    // clear output folders
    //  or set them up if they don't exist
    // *************************************** \\

    // accomodate for difference when running in CI docker environment
    const env = process.env.NODE_ENV
    let outputPath = 'output'
    if(env === 'ci') {
        outputPath = '/output'
    }
    // clear output/report directory if it exists or create output/report directory
    // if(fse.pathExistsSync(`${outputPath}/report`)) {
    //   console.log('Clear report directory ...')
    //   fse.removeSync(`${outputPath}/report/cucumber_report.html`)
    //   fse.removeSync(`${outputPath}/results.xml`)
    // } else {
    //   fse.ensureDirSync(`${outputPath}/report`)
    // }

    // clear output/screenshots directory if it exists or create output/screenshots directory
    if(fse.pathExistsSync(`${outputPath}/screenshots`)) {
        console.log('Clear screenshots directory ...')
        fse.removeSync(`${outputPath}/screenshots`)
        // recreate directory
        fse.ensureDirSync(`${outputPath}/screenshots`)
    } else {
        console.log('Create screenshots directory ...')
        fse.ensureDirSync(`${outputPath}/screenshots`)
    }




})

Before(async () => {
    // create new page between scenarios
    scope.page = await scope.browser.newPage()
    // add in accept language header - this is required when running in headless mode
    await scope.page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.8,zh-TW;q=0.6'
    })
    // await scope.page.setViewport({ width: 375, height: 812, isMobile: true })
})

// After(async () => {
//   await scope.page.screenshot({path: 'test.png', fullPage: true})
//   // close the current page at end of scenario - to ensure fresh page is loaded each time
//   await scope.page.close()
// })

After(async function (scenario) {
    // *************************************** \\
    // take screenshot at end of scenario,
    //  if failure attach screenshot to test steps
    // *************************************** \\

    let name = scenario.pickle.name.replace(/ /g, '-')
    let result = scenario.result.status
    // let outputPath = 'output'

    // accomodate for difference when running in CI docker environment
    const env = process.env.NODE_ENV
    console.log('Environment is default=> ' + env);
    let outputPath = 'output'
    if(env === 'ci') {
        console.log('Environment is ci => ' + env);
        outputPath = '/output'
    }else if(env == 'docker-compose'){
        console.log('Environment is docker-compose=> ' + env);
        outputPath = 'output'
    }

    if(result === Status.FAILED) {

        const stream = await scope.page.screenshot({path: `${outputPath}/screenshots/${counter}-${result}-[${name}].png`, fullPage: true});
        // close the current page at end of scenario - to ensure fresh page is loaded each time
        await scope.page.close()
        // increment counter
        counter++
        return this.attach(stream, 'image/png');
    } else {  // do nothing if test pass
        // let timestamp = moment()
        // // take screenshot of the last page
        //  const stream = await scope.page.screenshot({ path: `${outputPath}/screenshots/${counter}-${result}-[${name}]-${timestamp.valueOf()}.png`, fullPage: true })
        // // close the current page at end of scenario - to ensure fresh page is loaded each time
        await scope.page.close()
        // increment counter
        counter++
        // return this.attach(stream, 'image/png');
    }
})

AfterAll(async () => {
    if (scope.browser) {
        // close the browser at end of run
        await scope.browser.close()
    }
})