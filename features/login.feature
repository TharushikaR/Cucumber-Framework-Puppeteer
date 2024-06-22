Feature: Login

    As a user
    I can login to application

    Scenario: User can login to application
    Given User open login page
    When User enter username
    When User enter password
    And User click on Login button
    Then User able to see application content