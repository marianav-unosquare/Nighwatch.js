module.exports = {
    url: 'https://www.unosquare.com/blog/',

    elements: {
        mainTitle: {
            selector: 'h1[class="elementor-heading-title elementor-size-default"]'
        },
        imgOpenAI: '.attachment-full.size-full.wp-image-6645',
        articleHeader: {
            selector: 'article[class="elementor-post elementor-grid-item post-6635 post type-post status-publish format-standard has-post-thumbnail hentry category-software-development"] h3[class="elementor-post__title"] a'
        },
        buttonLoadMore: {
            selector: 'a[class="elementor-button-link elementor-button"]'
        },
        breadcrubs: {
            selector: 'nav[aria-label="breadcrumbs"] p'
        }
    },
    commands: {

        verifyNewsAndBlog(header, title){
            return this
            .assert.urlContains('blog')
            .assert.containsText('@mainTitle', header)
            .assert.cssProperty('@imgOpenAI', 'width', '313.104px')
            .assert.attributeContains('@buttonLoadMore', 'role','button')
            .assert.not.cssProperty('@imgOpenAI', 'height', '5000px')
            .assert.containsText('@articleHeader', 'Software Development')
            .assert.title(title)
            .expect.element('@breadcrubs').text.to.contain('BLOG')      
        }
    }

}