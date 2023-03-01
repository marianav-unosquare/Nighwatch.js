module.exports={
    'SecondPR - nightwatch.js website' : function(browser){
        const getStartedBtn ='//a[normalize-space()="Get started"]';
        const apiBtn= '//div[@class="nav-links-left"]//span[1]';
        const nightwatchHeader= '#nightwatch-apis'
        const searchBar= '.DocSearch-Button-Placeholder';
        const popUpSearch= '.DocSearch-StartScreen';
        const popUpInput= '#docsearch-input';
        const firstSearchOpt= 'body > div:nth-child(32) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > mark:nth-child(1)';
        const headerAPI= 'div[class="page-header"] h2';
        const blogBtn ="(//div[@class='nav-item'])[4]";
        const addressSection= '.address';
        const textNWJS= 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.';


        browser
        .windowMaximize()
        .url("https://nightwatchjs.org/")
        .useXpath()
        .assert.visible(getStartedBtn)
        .click(apiBtn)
        .useCss()
        .assert.containsText(nightwatchHeader, 'Nightwatch APIs')
        .click(searchBar)
        .expect.element(popUpSearch).to.be.visible;
        browser
        .pause(2000)
        .setValue(popUpInput, 'Asserts')
        .click(firstSearchOpt)
        .assert.urlContains('adding-assertions.html#-assert')
        .verify.containsText(headerAPI, 'Adding assertions to tests')
        .useXpath()
        .click(blogBtn)
        .useCss()
        .assert.containsText(addressSection, textNWJS)
        .end()

        
    }

}