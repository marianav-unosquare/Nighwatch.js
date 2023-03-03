module.exports = {
    url: 'https://www.amazon.com/',


    elements: {
        searchBar: '#twotabsearchtextbox',
        searchBtn: '#nav-search-submit-button',
        firstPrice:{
            selector: 'div[class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1"] span[class="a-price-whole"]'
        },
        itemSelect:{
            selector: 'div[class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1"] span[class="a-size-medium a-color-base a-text-normal"]'
        },
        secondPrice:'#renewedBuyBoxPrice',
        addToCart: '#add-to-cart-button',
        thirdprice: {
            selector: 'span[class="a-price sw-subtotal-amount"] span[class="a-price-whole"]'
        },
        addedCartIcon:{
            selector:'div[class="a-box a-alert-inline a-alert-inline-success sw-atc-message"] i[class="a-icon a-icon-alert"]'
        },
        goToCart:{
            selector: 'span[id="sw-gtc"] span[class="a-button-inner"] a[class="a-button-text"]'
        },
        deleteItem:{
            selector: 'span[data-action="delete"] span[class="a-declarative"] input[data-action="delete"]'
        }
    }, 
    commands:{
        searchItem(product, firstpriceG, secondPriceG, thirdpriceG){
            return this
            .waitForElementVisible('@searchBar')
            .assert.visible('@searchBar')
            .setValue('@searchBar', product.name)
            .click('@searchBtn')
            .waitForElementVisible('@itemSelect')
            .pause(1000)
            .getText('@firstPrice', function(result){
                firstprice=result.value.toString();
                firstpriceG= firstprice;
                console.log(firstpriceG);
            })
            .click('@itemSelect')
            .waitForElementVisible('@secondPrice')
            .assert.visible('@secondPrice')
            .pause(3000)
            .getText('@secondPrice', function(price){
                secondprice= price.value.toString();
                secondPrice= secondprice.substring(1,4);
                secondPriceG= secondPrice;
                console.log(secondPriceG);
                if(secondPriceG==firstpriceG){
                    console.log('Same value first and second prices')
                }
            })
            .click('@addToCart')
            .assert.visible('@addedCartIcon')
            .getText('@thirdprice', function(price){
                thirdprice= price.value.toString();
                thirdpriceG=thirdprice
                console.log(thirdpriceG)
                if (secondPriceG==thirdpriceG){
                    console.log('Same value second and third prices')
                }
            })
            .click('@goToCart')
            .waitForElementVisible('@deleteItem')
            .click('@deleteItem')
            //Assert prices are always the same
            .assert.equal(firstpriceG, secondPriceG)
            .assert.equal(secondPriceG, thirdpriceG)
        }
    }
}