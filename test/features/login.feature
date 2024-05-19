Feature: Saudemo Login Scenario

    @all
    Scenario: login successfully with valid credintials
    Given I open Saucedemo website
    When I login with valid credentials
    Then I should be on the inventory page

    @all
    Scenario: Verify login failed with invalid username
    Given I open Saucedemo website
    When I login with invalid email
    Then I should see an error message