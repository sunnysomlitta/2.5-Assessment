let palindrome = (browser, input, palindromeResults, ) => {
    browser
        .useXpath()
        .setValue('//input[@name="palindromeInput"]', input)
        .click('//button[@name="palindromeButton"]')
        .assert.containsText('//span[@name="palindromeResults"]', palindromeResults)




}

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:49548/')
        browser.waitForElementPresent('body', 5000, 'Checking for page to be loaded')

    },

    after: browser => {
        browser.end()

    },





    'palindrome': browser => {

        palindrome(browser, 'level', 'true')

        browser.clearValue('//input[@name="palindromeInput"]')

        palindrome(browser, 'mom', 'true')

        browser.clearValue('//input[@name="palindromeInput"]')

        palindrome(browser, 'gayyy', 'false')








        browser.pause(2000)


    }

}