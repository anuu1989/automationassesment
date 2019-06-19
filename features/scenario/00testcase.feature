Feature:  Automation Assessment

  @done
  Scenario: Basic test cases1
     Given Open homepage for home page of calculator
     And I wait for "15" seconds
     And You select application type as "Single"
     And Number of dependent as "0"
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
     And total credit card limit as "10000"
     And I wait for "2" seconds
     When I click on button "Work out how much I could borrow"
     And I wait for "2" seconds
     Then I should see the estimate as "$482,000"


   @done
   Scenario: Basic test cases2
      Given Open homepage for home page of calculator
      And You select application type as "Single"
      And Number of dependent as "0"
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
      And total credit card limit as "10000"
      And I wait for "2" seconds
      When I click on button "Work out how much I could borrow"
      And I wait for "2" seconds
      And I should see the estimate as "$482,000"
      And I click "Start over" button
      Then All the fields should reset


    @done
   Scenario: Basic test cases3
      Given Open homepage for home page of calculator
      And You select application type as "Single"
      And Number of dependent as "0"
      And You select property you would like to buy as "Home to live in"
      And Enter living expenses as "1"
      And I wait for "2" seconds
      When I click on button "Work out how much I could borrow"
      And I wait for "2" seconds
      Then I should see the estimate a error "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641."




