module.exports = {
    'test pages validation': function (browser) {
        var unosquare = browser.page.mainpage();
        var newsblog = browser.page.newsandblog();

        const header= 'Digital Transformation Blog';
        const title = 'Digital Transformation Blog - Unosquare';

        unosquare
            .navigate()
            .waitForElementVisible('@newsandblog')
            .click('@newsandblog')

        newsblog
            .pause(4000)
            .verifyNewsAndBlog(header, title)

        browser.end();

    }
}