Feature: Download Functionality


  Scenario Outline: Verify Downloaded Package - Name -  <Package>

    Given I am on the Downloads page
    When I identify the current version of <Package>
    Then I open the download page of <Package>
    And I click the download button of <Package>
    And I verify that the downloaded package has in its filename the same version number mentioned on the website

    Examples:
    |Package|
    |Office365|
    |SharePoint 2016|
    |SharePoint 2019|
    |SharePoint 2013|

