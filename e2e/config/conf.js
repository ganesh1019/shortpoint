var path = require('path');
var downloadsPath = path.resolve(__dirname, 'downloads');
exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    getPageTimeout : 600000,
    allScriptsTimeout : 10000000,
    framework : 'custom',
    frameworkPath : require.resolve('protractor-cucumber-framework'),
    capabilities : {
        'browserName' : 'chrome',
        'chromeOptions': {
            prefs: {
                download: {
                    'prompt_for_download': false, 'directory_upgrade': true, 'default_directory': downloadsPath
                }
            }
        }
    },
    specs:['../features/*.feature'],

    baseUrl : "https://www.shortpoint.com/download",

    ignoreUncaughtExceptions: true,

    params : {
        ecWait : {
            waitTime : 50000
        }
    },

    beforeLaunch: function() {
        let fs = require('fs');
        if (!fs.existsSync('html_reports')) {
            fs.mkdirSync('html_reports');
        }
        if (!fs.existsSync('json_reports')) {
            fs.mkdirSync('json_reports');
        }

    },

    onPrepare : function() {

        chai = require('chai');
        chai.use(require('chai-as-promised'));
        chai.should();
        chai.expect();
        browser.driver.manage().window().setSize(1600,1400);
       // browser.driver.manage().window().maximize();
    },

    cucumberOpts : {
        require : [ '../commons/*.js', '../stepDefinitions/*.js', '../support/*.js' ],
        tags : ["~@ignore"],
        format: ['json:json_reports/cucumber_report.json'],
        profile: false,
        'no-source': true,
        'fail-fast': true
    },

    onComplete : function() {
        let createHtmlReport = function () {
            let reporter = require('cucumber-html-reporter');

            let options = {
                theme: 'bootstrap',
                jsonDir: 'json_reports',
                output: './html_reports/cucumber_report.html',
                ignoreBadJsonFile:true,
                name: 'Shortpoint UI Tests',

            };

            reporter.generate(options);
        };
        try{
            createHtmlReport();
        }
        catch(e){
            console.log("Error in generating reports..");
        }

        console.log("All tests completed.");

    }
};
