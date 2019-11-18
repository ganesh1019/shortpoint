'use strict';
var BasePage = require('./basePage.js');
var helperObject = new BasePage();
const homePageObject = require('./homePage.js');

const params = browser.params;
let fs = require('fs');
let path = require('path');

helperObject.success = success;
helperObject.error = error;
helperObject.fail = fail;
helperObject.verifyFileName = verifyFileName;
helperObject.loadShortPoint = loadShortPoint;

function loadShortPoint() {
    return loginPageObject.loadPage().then(() => {
        console.log('In Downloads Page');
    }).catch(e => error(e));
}

function success() {
    return Promise.resolve(true);
}

function fail() {
    return Promise.reject(false);
}

function error(e) {
    return Promise.reject("Failed with error " + e);
}

function verifyFileName(packageName) {
    
    var downloadsPath = path.resolve('config/downloads');
    const testFolder = downloadsPath;
    var fileName='';
    const fs = require('fs');
    return browser.get(browser.baseUrl).then(() => {
        if(packageName === 'Office365') {
            fs.readdirSync(testFolder).forEach(file => {
                var version = homePageObject.verifyOffice365Version();
                if(file.indexOf(version) > -1) {
                    return true;
                }
            });
        }
        if(packageName === 'SharePoint 2013') {
            fs.readdirSync(testFolder).forEach(file => {
                var version = homePageObject.getSharePoint2013Version();
                if(file.indexOf(version) > -1) {
                    return true;
                }
            });
        }
        if(packageName === 'SharePoint 2016') {
                fs.readdirSync(testFolder).forEach(file => {
                    var version = homePageObject.getSharePoint2016Version();
                    if(file.indexOf(version) > -1) {
                        return true;
                    }
                });
        }
        if(packageName === 'SharePoint 2019') {
            fs.readdirSync(testFolder).forEach(file => {
                var version = homePageObject.getSharePoint2019Version();
                if(file.indexOf(version) > -1) {
                    return true;
                }
            });
        }
    }).then(() => {
        const rimraf = require('rimraf');
        rimraf(downloadsPath, function () { console.log('done'); });    }).then(() => {
        return true;
    });
    
    
}

module.exports = helperObject;
