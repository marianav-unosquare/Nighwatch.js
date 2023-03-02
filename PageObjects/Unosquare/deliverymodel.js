module.exports = {
    url: 'https://www.unosquare.com/delivery-model/',
    elements: {
        mainTitle:{
            selector: 'h1[class="elementor-heading-title elementor-size-default"]'
        },
        imgDeliveryMod:{
            selector: '.attachment-large.size-large.wp-image-5755'
        },
        contactUsNowBtn:{
            selector: 'div[class="elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button"] a[role="button"]'
        },
        clientSuccImg: {
            selector: 'img[alt="Client success"]'
        },
        talentAcqTitle:{
            selector: 'div[class="elementor-element elementor-element-d55228f elementor-widget elementor-widget-heading"] h2[class="elementor-heading-title elementor-size-default"]'
        },
        parragraphFirst:{
            selector: 'body > main:nth-child(12) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)'
        }
    },

        commands: {
            verifyDeliveryModel(header, title, parrContent){
                return this
                .assert.urlContains('delivery-model')
                .assert.containsText('@mainTitle', header)
                .assert.cssProperty('@imgDeliveryMod', 'width', '754px')
                .assert.attributeContains('@contactUsNowBtn', 'role','button')
                .assert.not.cssProperty('@clientSuccImg', 'height', '5000px')
                .assert.containsText('@talentAcqTitle', 'Talent Acquisition')
                .assert.title(title)
            }
        }

    }