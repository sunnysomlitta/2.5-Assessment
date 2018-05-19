let oddsAndEvens = (browser, input, evenResults, oddResults) => {
    browser
        .useXpath()
        .setValue('//input[@name="evenOddInput"]', input)
        .click('//button[@class="confirmationButton"]')
        .assert.containsText('//span[@name="evenResults"]', evenResults)
        .assert.containsText('//span[@name="oddResults"]', oddResults)
        .clearValue('//input[@name="evenOddInput"]')
}

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:49548/')
        browser.waitForElementPresent('body', 5000, 'Checking for page to be loaded')
    },

    after: browser => {
        browser.end()

    },





    'Odds and Evens': browser => {
        // browser.useXpath()
        //     .setValue('//input[@name="evenOddInput"]', '1,2,3,4,5,6,7')
        //     .click('//button[@class="confirmationButton"]')
        //     .assert.containsText('//span[@name="evenResults"]','2,4,6')
        //     .assert.containsText('//span[@name="oddResults"]','')
        //     .clearValue('//input[@name="evenOddInput"]')
        oddsAndEvens(browser, '1, 2, 3, 4, 5, 6, 7, 8, 9', '2,4,6,8', '1,3,5,7,9')

        browser
            .setValue('//input[@name="evenOddInput"]', '11111,322,33,4444,4')
            .click('//button[@class="confirmationButton"]')
            .assert.containsText('//span[@name="evenResults"]', '')
            .assert.containsText('//span[@name="oddResults"]', '')
            .clearValue('//input[@name="evenOddInput"]')

            //check results
            .setValue('//input[@name="evenOddInput"]', 'jk')
            .click('//button[@class="confirmationButton"]')
            .assert.containsText('//span[@name="evenResults"]', '')
            .assert.containsText('//span[@name="oddResults"]', 'null')





        browser.pause(2000)


    }

}