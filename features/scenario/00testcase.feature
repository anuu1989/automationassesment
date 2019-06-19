Feature:  Automation Assessment

  @done
  Scenario: Basic test cases
     Given Open homepage for home page of calculator
     And I wait for "15" seconds
     And You select application type as "Single"
     And Number of dependent as "1"
     And I wait for "2" seconds
     And You select property you would like to buy as "Home to live in"
     And Enter you income as "80000"
     And I wait for "2" seconds
     And Enter other income as "10000"
     And I wait for "2" seconds
     And Enter living expenses as "500"
     And I wait for "2" seconds
     And Current home loan repayments as "0"
     And I wait for "2" seconds
     And Other commitments as "0"
     And I wait for "2" seconds
     And tolal credit card limit as "10000"
     And I wait for "2" seconds
     When I click on button "Work out how much I could borrow"
     And I wait for "2" seconds
     Then I should see the estimate as "$430000"



