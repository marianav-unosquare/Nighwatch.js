function getData() {
    return require('C:/Users/mariana.vives/source/repos/NightWatchJs/dataExternal/unosquareForm.json'); 
    // Using the correct path is important
    }

module.exports = {
    'test pages validation': function (browser) {
        var unosquare = browser.page.mainpage();
        var unoscontactus = browser.page.contactus();
        const form = getData();

        unosquare
            .navigate()
            .waitForElementVisible('@contactusMenu')
            .click('@contactusMenu')

        unoscontactus
            .validateWebsiteInfo()
            .fillForm(form)

        browser.end();

    }
}