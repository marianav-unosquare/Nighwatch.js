module.exports = {
    before: function (browser) {
    },

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'Mike Selby')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            //browser.assert.equal(response.body.copyright, 'My Name')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    },

    //From https://api.nasa.gov/  select 2 GET's and implement them in the test framework.

    'API Testing Mariana - Get': function(browser){
        var apiToken = '5ZpzNnl9vn4lC5f5xAXmvXWE2fzXETV4SdRfrpp6';
        var apiUrl = ('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&' + 'api_key=' + apiToken);
        browser.apiGetNasa(apiUrl, function(response){
            browser.assert.equal(response.statusCode, '200'),
            browser.assert.equal(response._body.photos[0].id, '424926')
            browser.assert.equal(response._body.photos[0].camera.full_name, 'Mast Camera')
        })
    },

    'API Testing Mariana - Get2': function(browser){
        var apiToken = '5ZpzNnl9vn4lC5f5xAXmvXWE2fzXETV4SdRfrpp6';
        var apiUrl = ('https://api.nasa.gov/techtransfer/patent/?engine&' + 'api_key=' + apiToken);
        const text= 'NASA Langley Research Center has developed two tools for turbofan <span class="highlight">engine</span> acoustic liner design and analysis. The first is a statistical approach for broadband liner design and assessment. The second is graphical software to design and analyze resonant channels in acoustic liners.';
        browser.apiGetNasa(apiUrl, function(response){
            console.log(response._body)
            browser.assert.equal(response.statusCode, '200'),
            browser.assert.equal(response._body.results[0][3], text)
        })
    },

    'POST - Testing Mariana ResRes': function(browser){
        var endpoint= 'api/users';
        var apiUrl= 'https://reqres.in/'+endpoint;
        jsonBody= {'name':'MyName', 'job':'MyJob'};
        browser.apiPost(apiUrl, jsonBody, null, null, function (response){
            browser.assert.equal(response.body.name, 'MyName'),
            browser.assert.equal(response.body.job, 'MyJob'),
            browser.assert.not.equal(response.body.id, '0')
        })
    }

};