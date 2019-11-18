'use strict';
const homePageLocators = {
    office365Version: element(by.css('#g1-section-1 > div > p:nth-child(5) > b:nth-child(1)')),
    sharepoint2013Version: element(by.css('#g1-section-1 > div > p:nth-child(5) > b:nth-child(2)')),
    sharePoint2019Version: element(by.css('#g1-section-1 > div > p:nth-child(5) > b:nth-child(1)')),
    sharepoint2016Version: element(by.css('#g1-section-1 > div > p:nth-child(5) > b:nth-child(2)')),
    office365Link: element(by.css('#g1-box-counter-4')),
    sharepoint2013Link: element(by.css('#g1-box-counter-1')),
    sharepoint2016Link: element(by.css('#g1-box-counter-2')),
    sharepoint2019Link: element(by.css('#g1-box-counter-3')),
    acceptButton: element(by.css('#hs-eu-confirmation-button'))
};
module.exports = homePageLocators;
