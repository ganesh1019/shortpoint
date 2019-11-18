const {
    defineSupportCode
} = require("cucumber");
const helperObject = require('../page/methods/helper.js');
const homePageObject = require('../page/methods/homePage.js');
const downloadPageObject = require('../page/methods/downloadPage.js');

const assert = require('chai').assert;
const params = browser.params;

defineSupportCode(function({
    Given,
    When,
    Then
}) {

    Given(/^I am on the Downloads page$/, function() {
        return assert.eventually.equal(homePageObject.loadPage(), "Download ShortPoint");
    });

    When(/^I identify the current version of Office365$/, function() {
        return assert.eventually.equal(homePageObject.getOffice365Version(),true );
    });
    
    When(/^I identify the current version of SharePoint 2013$/, function() {
        return assert.eventually.equal(homePageObject.getSharePoint2013Version(),true );
    });
    
    When(/^I identify the current version of SharePoint 2016$/, function() {
        return assert.eventually.equal(homePageObject.getSharePoint2016Version(),true );
    });
    
    When(/^I identify the current version of SharePoint 2019$/, function() {
        return assert.eventually.equal(homePageObject.getSharePoint2019Version(),true );
    });
    
    When(/^I open the download page of Office365$/, function() {
        return assert.eventually.equal(homePageObject.goToOffice365DownloadPage(), true);
    });
    
    When(/^I open the download page of SharePoint 2013$/, function() {
        return assert.eventually.equal(homePageObject.goToSharePoint2013DownloadPage(), true);
    });
    
    When(/^I open the download page of SharePoint 2016$/, function() {
        return assert.eventually.equal(homePageObject.goToSharePoint2016DownloadPage(), true);
    });
    
    When(/^I open the download page of SharePoint 2019$/, function() {
        return assert.eventually.equal(homePageObject.goToSharePoint2019DownloadPage(), true);
    });
    
    
    When(/^I click the download button of Office365$/, function() {
        return assert.eventually.equal(downloadPageObject.clickDownload(), true);
    });
    
    When(/^I click the download button of SharePoint 2013$/, function() {
        return assert.eventually.equal(downloadPageObject.clickDownload(), true);
    });
    
    
    When(/^I click the download button of SharePoint 2016$/, function() {
        return assert.eventually.equal(downloadPageObject.clickDownload(), true);
    });
    
    
    When(/^I click the download button of SharePoint 2019$/, function() {
        return assert.eventually.equal(downloadPageObject.clickDownload(), true);
    });
    
    
    When(/^I verify that the downloaded package has in its filename the same version number mentioned on the website$/, function() {
        return assert.eventually.equal(helperObject.verifyFileName('Office365'),true);
    });
    
});
