module.exports = {
    url: 'https://nightwatchjs.org/',
    elements: {
        apiBtn: {
            selector:'body > header:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > span:nth-child(1)'
        },
        nightwatchHeader:'#nightwatch-apis',
        searchBar:'.DocSearch-Button-Placeholder',
        popUpSearch:'.DocSearch-StartScreen',
        popUpInput:'#docsearch-input',
        firstSearchOpt: {
            selector:'body > div:nth-child(32) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > mark:nth-child(1)'
        },
        headerAPI:'div[class="page-header"] h2',
        blogBtn: {
            selector:"body > header:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)"},
        addressSection:'.address',
    },

    commands:{
        clickAPIBtn(){
            return this
            .assert.visible('@apiBtn')
            .click('@apiBtn')
        },

        search(text, urlText){
            return this
            .pause(2000)
            .setValue('@popUpInput', text)
            .click('@firstSearchOpt')
            .assert.urlContains(urlText)
            .assert.containsText('@headerAPI', 'Adding assertions to tests')
        },

        blog(textNWJS){
            return this
            .click('@blogBtn')
            .assert.containsText('@addressSection', textNWJS)
        }

    }
}