module.exports = {
    'FirstPR-  Search oreo milkshake recipe using Ecosia ' : function(browser) {
        browser
        .windowMaximize()
        .url("https://www.ecosia.org/")
        .assert.urlContains('https')
        .waitForElementVisible('body')
        .useCss()
        .setValue('input[type=search]','oreo milkshake')
        .assert.value('input[type=search]', 'oreo milkshake')
        .click('button[type=submit]')
        .assert.containsText('div[class=result__title]', 'Oreo Milkshake Recipe')
        .click('div[class=result__title]')
        .pause(3000)
        .assert.urlEquals('https://www.allrecipes.com/recipe/228324/oreo-milkshake/')
        .assert.title('Oreo Milkshake Recipe')
        .verify.visible('#mntl-auth0_1-0')
        .assert.visible('#article-heading_1-0')
        .assert.cssProperty('.primary-image__image.mntl-primary-image--blurry.loaded', 'height', '600px')

    }
}