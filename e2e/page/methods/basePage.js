'use strict';
const ec = protractor.ExpectedConditions;
const params = browser.params;
const waitTime = params.ecWait.waitTime;

var BasePage = function() {
};

BasePage.prototype.toggleBrowserSynchronization = function(flag) {
    browser.ignoreSynchronization = flag;
};

BasePage.prototype.isElementVisible = function(locator) {
    return browser.wait(ec.visibilityOf(locator), waitTime, "Element ' " + locator + "' has not become visible");
};

BasePage.prototype.isElementDisplayed = function(locator) {
    this.isElementVisible(locator);
    return locator.isDisplayed().then(function(isVisible){
        return isVisible
    },function(err){
        throw new Error(err)
    });
};

BasePage.prototype.isElementInvisible = function(locator){
    return browser.wait(ec.invisibilityOf(locator),waitTime);
};

BasePage.prototype.type = function(locator, text) {
    return locator.sendKeys(text);
};

BasePage.prototype.click = function(locator) {
    this.isElementVisible(locator);
    return locator.click();
};

BasePage.prototype.clickIfDisplayed = function(locator) {
    this.isElementDisplayed(locator);
    return locator.click();
};

BasePage.prototype.doubleClick = function(locator) {
    this.isElementVisible(locator);
    browser.actions().doubleClick(locator).perform();
};

BasePage.prototype.isElementClickable = function(locator){
    return browser.wait(ec.elementToBeClickable(locator))
};

BasePage.prototype.loadUrl = function() {
    return browser.get(browser.baseUrl);
};

BasePage.prototype.browserWait = function(ecTypeAndLocator) {
    browser.wait(ecTypeAndLocator, waitTime);
};

// An expectation for checking that an element is present on the DOM of a page.
// This does not necessarily mean that the element is visible.

BasePage.prototype.checkPresenceOf = function(locator) {
    return ec.presenceOf(locator);
};

BasePage.prototype.elementToBeClickable = function(locator) {
    return ec.elementToBeClickable(locator);
};

// Below method checks the visibility of element.
// Note - Visibility means that the element is not only displayed but also has a
// height and width that is greater than 0.

BasePage.prototype.checkVisibiltyOf = function(locator) {
    return ec.visibilityOf(locator);
};

BasePage.prototype.getPageTitle = function () {
    return browser.driver.getTitle();
};

BasePage.prototype.getUrl = function() {
    return browser.getCurrentUrl();
};
BasePage.prototype.waitForElementToLoad = function() {
    return browser.sleep(4000);
}

BasePage.prototype.setBrowserWindowSize = function (width,height) {
    browser.driver.manage().window().setSize(width, height);
};

BasePage.prototype.scrollIntoView = function(locator) {
    browser.executeScript('arguments[0].scrollIntoView()', locator);
};

BasePage.prototype.isElementPresent = function(locator) {
    return locator.isPresent();
};

BasePage.prototype.selectValueFromDropDown = function ( element, optionNum ) {
    if (optionNum){
         var options = element.all(by.tagName('option')).then(function(options){
              options[optionNum].click();
         });
    }
};

module.exports = BasePage;
