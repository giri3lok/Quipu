Feature: Navigate to a Psychic's Livestream
    In order to meet a known psychic
    As a guest user
    I want to be able to sign up for a livestream

    @signup-to-get-credits
    Scenario: Validate for live stream psychic sign up first to Get Free Credits
        Given I navigate to Oranum application as a guest user
        When I click on the psychic with live button
        Then I should navigate to chat url with psychic as LIVE badge
        When I click on Get Credits button
        Then a sign up modal is showed

    @signup-to-add-favorites
    Scenario: Validate for live stream psychic sign up first to add favorites
        Given I navigate to Oranum application as a guest user
        When I click on the psychic with live button
        Then I should navigate to chat url with psychic as LIVE badge
        When I press add to favorites
        Then a sign up modal is showed

    @signup-to-a-suprise-buttons
    Scenario: Validate for live stream psychic sign up first to get surprise button
        Given I navigate to Oranum application as a guest user
        When I click on the psychic with live button
        Then I should navigate to chat url with psychic as LIVE badge
        Then I clicks to get a surprise buttons and show signup modals

    @signup-to-get-Start-session
    Scenario: Validate for live stream psychic sign up first to get start session
        Given I navigate to Oranum application as a guest user
        When I click on the psychic with live button
        Then I should navigate to chat url with psychic as LIVE badge
        When I press to start private session
        Then a sign up modal is showed

    # @signup-to-get-coins-button
    # Scenario: Validate for live stream psychic sign up first to get coins
    #     Given I navigate to Oranum application as a guest user
    #     When I click on the psychic with live button
    #     Then I should navigate to chat url with psychic as LIVE badge
    #     When I press to get coins button
    #     Then a sign up modal is showed
