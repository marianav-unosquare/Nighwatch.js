module.exports={
    'Google dummy test' : function(browser){
        const searchBar = 'input[name=q]';
        const imgText = 'h3[class=GmE3X]';
        
        browser
        .windowMaximize()
        .url('https://www.google.com/')
        .setValue(searchBar, 'puppies husky')
        .keys(browser.Keys.ENTER)
        .expect.element(imgText).text.to.contain('puppies husky')
    }
}