let dimsum = (browser, sumInput1, sumInput2, sumResults, ) => {
    browser
        .useXpath()
        .setValue('//input[@name="sumInput1"]', sumInput1)
        .setValue('//input[@name="sumInput2"]', sumInput2)
        .click('//button[@name="sumButton"]')
        .assert.containsText('//span[@name="sumResults"]', sumResults)




}

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:49548/')
        browser.waitForElementPresent('body', 5000, 'Checking for page to be loaded')

    },

    after: browser => {
        browser.end()

    },





    'dimsum': browser => {

        dimsum(browser, '59','10', '69')

        browser.clearValue('//input[@name="sumInput1"]')
        browser.clearValue('//input[@name="sumInput2"]')

        dimsum(browser, '79','-10', '69')

        browser.clearValue('//input[@name="sumInput1"]')
        browser.clearValue('//input[@name="sumInput2"]')

        dimsum(browser, '34','35', '69')








        browser.pause(2000)


    }

}