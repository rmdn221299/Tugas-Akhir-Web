Feature: Add Categories

    @test
    Scenario: Add Categories
    Given I open Kasirdemo website
    When I login with valid credentials
    When I should be on the dashboard page
    When I click categories
    When I fill form categories
    When I click button simpan
    Then I get alert success
