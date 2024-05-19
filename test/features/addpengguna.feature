Feature: Add Pengguna

    
    Scenario: Add Pengguna
    Given I open Kasirdemo website
    When I login with valid credentials
    When I should be on the dashboard page
    When I click pengguna
    When I fill form pengguna
    When I click button simpan
    Then I get alert success
