module.exports={
    'SecondPR - nightwatch.js website' : function(browser){
        var Nightwatch = browser.page.landingpage();
        const text = 'Asserts';
        const textNWJS='Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.';
        const urlText= 'adding-assertions.html#-assert';

        Nightwatch
        .navigate()
        .clickAPIBtn()
        .assert.containsText('@nightwatchHeader', 'Nightwatch APIs')
        .click('@searchBar')
        .expect.element('@popUpSearch').to.be.visible;
        
        Nightwatch
        .search(text, urlText)
        .blog(textNWJS)
        .end()

        
    }

}