'use strict';

const homePageLocators = require('../locators/homePage.js');
const downloadPageLocators = require('../locators/downloadPage.js');

const params = browser.params;
var BasePage = require('./basePage.js');
var downloadPageObject = new BasePage();
var helperObject = require('./helper.js');

downloadPageObject.clickDownload = clickDownload;

function clickDownload() {
    return downloadPageObject.waitForElementToLoad().then(()=> {
        return downloadPageObject.click(downloadPageLocators.downloadLink).then(() => {
            return true;
        });
    });
}

module.exports = downloadPageObject;
