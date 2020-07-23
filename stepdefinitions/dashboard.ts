import { Then, When, TableDefinition } from "cucumber";
import { DashboardPage } from "../pages/dashboardpage";
import { expect } from "chai";
import { browser, element, by } from "protractor";
var _ = require('lodash');

var dashboardPage = new DashboardPage();

/**Dashboard page verification and validation  */

Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 90000 }, async (expectedUrl) => {
    await dashboardPage.toCheckUserLandOnDashboard(expectedUrl);
});

Then(/^Verify the refersh icon is available on the tab dashboard page$/, { timeout: 50000 }, async () => {
    await dashboardPage.toCheckIconAvailable();
});

Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 90000 }, async () => {
    await dashboardPage.toCheckLogo();
});

Then(/^Verify whether all the project available on the dashboard page by project count$/, { timeout: 50000 }, async (table: TableDefinition) => {
    var expectedList = table.rowsHash();
    console.log("expected :" + expectedList.listOfItemCount)
   // await dashboardPage.listOfAvailableProjects();
   await dashboardPage.listOfAvailableProjects(expectedList.listOfItemCount);

});

When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async () => {

    await dashboardPage.clickOnProjectLink();
});


Then(/^Select status as pass$/, { timeout: 70000 }, async () => {
    await dashboardPage.filterpass();

});

Then(/^Able to get only pass test cases$/, { timeout: 70000 }, async (table: TableDefinition) => {
    var expecedStatus = table.rowsHash();
    console.log("expected status :"+expecedStatus.satus);
    await dashboardPage.getPassStatus();

});



When(/^User click on toggle button$/, { timeout: 80000 }, async () =>{
  await  dashboardPage.clickOnToggle();
	
});



Then(/^User can able to view test status$/, { timeout: 80000 }, async (table:TableDefinition) =>{
    var expectedData=table.rowsHash();
    console.log("expected test details :"+expectedData.testrun ,"\n"+"totalpass :"+expectedData.pass,"\n"+"total fail :"+expectedData.fail,"\n"+"total skip :"+expectedData.skip,"\n")
	await dashboardPage.toGetTestcaseDetails();
});
