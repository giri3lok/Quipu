Feature: Psychics Searching Results
	In order to search psychics by a partial name
	As a guest user
	I should able to view results that partially matches the searching filter
    @getSearchTerm
	Scenario Outline: Searching results match with Name and number on search dropdown
		Given I navigate to Oranum web application home page
		When I type "<searchTerm>" in the search
		Then only matching names are displayed in search dropdown
		Examples:
			| searchTerm |
			| Matt       |
			| Myst       |
			| Ann        |
			| psy        |
			| 123        |
	@getSearchListforuser
	Scenario Outline: Clicking on show all result 'name' from dropdown should show list with same name.
		Given I navigate to Oranum web application home page
		When I type "<name>" in the search
		Then user click on show all result with name
		Then all result contains "<name>" in the search list displayed
		Examples:
			| name       |
			| Ann        |
