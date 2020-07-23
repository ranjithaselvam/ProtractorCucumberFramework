Feature:Falcon dashboard
   @dashboard
   Scenario:Open falcon dashboard
      Then Verify the user landed on to the dashboard "dashboard"
      Then Verify the refersh icon is available on the tab dashboard page
      Then Verify atmecs logo on the dashboard page
      Then Verify whether all the project available on the dashboard page by project count
         | listOfItemCount | 43 |
      And   Click REST API TEST RESULT Link in dashboard
      And   Select status as pass
      Then  Able to get only pass test cases
         | satus | pass |
      When  User click on toggle button
      Then  User can able to view test status
         | status  | details    |
         | testrun | 10 TEST(S) |
         | pass    | 9          |
         | fail    | 1          |
         | skip    | 0          |




