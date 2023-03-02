module.exports = {
    'test pages validation this one fails': function (browser) {
    //Command to run tests and generate reports: node nightwatch --reporter html-reporter.js

        var unosquare = browser.page.mainpage();
        var deliverymodel = browser.page.deliverymodel();

        const header= 'Delivery Model';
        const title = 'Digital Transformation Delivery Model | Staff Augmentation Model - Unosquare';
        const parrContent= 'I make this test fail.';

        unosquare
            .navigate()
            .waitForElementVisible('@deliveryModel')
            .click('@deliveryModel')

        deliverymodel
            .pause(4000)
            .verifyDeliveryModel(header, title, parrContent)
            //Make test Fail
            .expect.element('@parragraphFirst').text.to.contain(parrContent)   
        browser.end();

    }
}