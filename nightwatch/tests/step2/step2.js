let filterObject = (browser, input, objectFilterResults, ) => {
    browser
        .useXpath()
        .setValue('//input[@name="objectFilterInput"]', input)
        .click('//button[@name="objectFilterButton"]')
        .assert.containsText('//span[@name="objectFilterResults"]', objectFilterResults)




}

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:49548/')
        browser.waitForElementPresent('body', 5000, 'Checking for page to be loaded')

    },

    after: browser => {
        browser.end()

    },





    'filterObject': browser => {

        filterObject(browser, 'hairColor', '"name": "Jeremy Schrader", "age": 24, "hairColor": "brown"')

        browser.clearValue('//input[@name="objectFilterInput"]')

        filterObject(browser, 'age', 'name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown')








        browser.pause(2000)


    }

}