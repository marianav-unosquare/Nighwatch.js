module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    custom_commands_path: "./commands",
    page_objects_path:[ 'PageObjects/Unosquare','PageObjects/Nightwatch'],
    skip_testcases_on_fail: false,
    src_folders: ["Tests/unosquare"],
    webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        cli_args: [
        ]
    },
    test_settings: {
        default: {
            'screenshots': {
                'enabled' : true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities: {
                browserName: 'chrome',
                'chromeOptions':{
                    'args':['--headless']
                }
            }
        }
    },
};