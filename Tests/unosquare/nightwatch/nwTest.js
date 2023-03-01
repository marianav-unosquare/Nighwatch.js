module.exports={
    'SecondPR - nightwatch.js website' : function(browser){
        var Nightwatch = browser.page.landingpage();

click();
setValue();
assert.title();
assert.urlEquals();
assert.enabled();
assert.visible();
    }
}