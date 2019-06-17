Feature:  Automation Assessment

  @done
  Scenario: Basic test cases
     Given Open homepage for home page of calculator
     And You select application type as "Single"
     And Number of dependent as "0"
     And You select proeprty you would like to buy as "Home to live in"
     And Enter you income as "80000"
     And Enter other income as "10000"
     And Enter living expenses as "500"
     And Current home loan repayments as "0"
     And Other commitements as "0"
     And tolal credit card limit as "10000"
     Then you should see borrowing estimates as "479000"

