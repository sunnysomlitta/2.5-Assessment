let filterString = (browser, input, nameFilterResults, ) => {
    browser
        .useXpath()
        .setValue('//input[@id="nameFilterInput"]', input)
        .click('//button[@id="nameFilterButton"]')
        .assert.containsText('//span[@name="nameFilterResults"]', nameFilterResults)




}

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:49548/')
        browser.waitForElementPresent('body', 5000, 'Checking for page to be loaded')

    },

    after: browser => {
        browser.end()

    },





    'filterString': browser => {

        filterString(browser, 'Jessica', '"Jessica"')

        browser.clearValue('//input[@id="nameFilterInput"]')

        filterString(browser, 'Melody', '"Melody"')








        browser.pause(2000)


    }

}