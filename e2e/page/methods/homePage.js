'use strict';

const homePageLocators = require('../locators/homePage.js');
const params = browser.params;
var BasePage = require('./basePage.js');
var homePageObject = new BasePage();
var helperObject = require('./helper.js');

homePageObject.getOffice365Version = getOffice365Version;
homePageObject.getSharePoint2013Version = getSharePoint2013Version;
homePageObject.getSharePoint2016Version = getSharePoint2016Version;
homePageObject.getSharePoint2019Version = getSharePoint2019Version;
homePageObject.goToOffice365DownloadPage = goToOffice365DownloadPage;
homePageObject.goToSharePoint2013DownloadPage = goToSharePoint2013DownloadPage;
homePageObject.goToSharePoint2016DownloadPage = goToSharePoint2016DownloadPage;
homePageObject.goToSharePoint2019DownloadPage = goToSharePoint2019DownloadPage;
homePageObject.loadPage = loadPage;
homePageObject.verifyOffice365Version = verifyOffice365Version;

function loadPage() {
    homePageObject.toggleBrowserSynchronization(true);
    homePageObject.loadUrl();
    return homePageObject.getPageTitle();
}


function getOffice365Version() {
      return homePageLocators.office365Version.getText().then((value) => {
          console.log(value);
          return homePageLocators.acceptButton.click();
      }).then(() => {
          return true;
      });
}

function getSharePoint2013Version() {
    return homePageLocators.sharepoint2013Version.getText().then((value) => {
        console.log(value);
    }).then(() => {
        return true;
    });
}

function getSharePoint2016Version() {
    return homePageLocators.sharepoint2016Version.getText().then((value) => {
        console.log(value);
    }).then(() => {
        return true;
    });
}

function getSharePoint2019Version() {
    return homePageLocators.sharePoint2019Version.getText().then((value) => {
        console.log(value);
    }).then(() => {
        return true;
    });
}

function verifyOffice365Version() {
    return homePageLocators.office365Version.getText().then((value) => {
        console.log(value);
    }).then(() => {
        return true;
    });
}

function goToOffice365DownloadPage() {
    return homePageLocators.office365Link.click().then((value) => {
        return true;
    });
}


function goToSharePoint2013DownloadPage() {
    return homePageLocators.sharepoint2013Link.click().then((value) => {
        return true;
    });
}


function goToSharePoint2016DownloadPage() {
    return homePageLocators.sharepoint2016Link.click().then((value) => {
        return true;
    });
}


function goToSharePoint2019DownloadPage() {
    return homePageLocators.sharepoint2019Link.click().then((value) => {
        return true;
    });
}



module.exports = homePageObject;
