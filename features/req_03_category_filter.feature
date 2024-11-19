@psychics-by-category
Feature: Select a Category
	In order to find a psychic by category
	As a user
	I want to be able to see all corresponding profiles into the category and should not be duplicate

	@category-results
	Scenario Outline: Select a category with its matching psychics
		Given I navigate to Oranum web application home page
		When I choose a "<category>"
		Then the profile match the current category

		Examples:
			| category             | 
		    # | Astrology            |
			# | Tarot                |
            # | Clairvoyance         |
            # | Dream interpretation |
            # | Healing              |
            # | Crystals             |
            # | Mediumship           |
            # | Crystal ball         |
            # | Numerology           |
            # | Runes                |
            # | Palm reading         |
            | Energy work           | 
