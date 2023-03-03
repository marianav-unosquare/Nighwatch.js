function getData() {
    const path='C:/Users/mariana.vives/source/repos/NightWatchJs/dataExternal/amazonForm.json'
    return require(path); 
    // Using the correct path is important
    }

module.exports = {
    'TC02 - Amazon test Page Validation': function (browser) {
        var mainpage = browser.page.mainpageAmazon();
        const product = getData();
        var firstpriceG;
        var secondPriceG;


        mainpage
        .navigate()
        .searchItem(product, firstpriceG, secondPriceG)

    }
}
