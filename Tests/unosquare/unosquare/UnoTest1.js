module.exports = {
    'test pages validation': function (browser) {
        var unosquare = browser.page.mainpage();
        var unoscontactus = browser.page.contactus();

        unosquare
            .navigate()
            .waitForElementVisible('@contactusMenu')
            .click('@contactusMenu')

        unoscontactus
            .pause(4000)
            .assert.urlEquals('https://www.unosquare.com/contact-us/')
            .assert.containsText('@contactHeader', 'Contact Us')
            .sendKeys('@nameInput', 'MyName')
            .sendKeys('@emailInput', 'myEmail@email.com')
            .sendKeys('@messageInput', 'MyMessage')
            .assert.cssProperty('@image', 'width', '367px')
            .assert.attributeContains('@submitBtn', 'value','Submit')
            .assert.not.cssProperty('@parragraph', 'font-size', '16px')
            .assert.title('Contact Us - Unosquare'),          

        browser.end();

    }
}