
import { Given, When, Then, TableDefinition } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from 'chai';
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";

import { TIMEOUT } from "dns";
import { get } from "http";
import { BasePage } from "../pages/basepage";
import { DashboardPage } from "../pages/dashboardpage";
import { ViewPage } from "../pages/viewpage";


var _ = require('lodash');
let helper = new ElementHelper();
var basePage=new BasePage();
var dashboardPage=new DashboardPage();
var viewPage=new ViewPage();

/* View Page Validation and Verification*/

When(/^select view tab in main naviagtion$/, { timeout: 250000 }, async () => {
    
   basePage.clickOnViewTab();

});
When(/^filter the status as pass in select status$/, { timeout: 70000}, async () => {
    dashboardPage.filterpass();

})

Then(/^able to get pass test cases$/, { timeout: 70000 }, async (table: TableDefinition) => {
    
 await  dashboardPage.getPassStatus();
    var exepass = table.hashes();
    _.each(exepass, function (passrow: any) {
        console.log("expected data:" + passrow.Status);
})

});


When(/^filter the status as fail in select status$/, { timeout: 250000 }, async () => {
    await viewPage.filterFail();
});



Then(/^able to get fail test case$/, { timeout: 70000 }, async (table: TableDefinition) => {
    
   await viewPage.getFailStatus();
    
    var exefail = table.rows();
    exefail.forEach(function (value) {
        console.log("Total fail :" + value[2]);
    });

});



Then(/^filter the status as skip in the select status$/, { timeout: 50000 }, async () => {
    
   await viewPage.filterSkip();
});

Then(/^able to get skip test case$/, { timeout: 70000 }, async (table: TableDefinition) => {
    
   await viewPage.getFailStatus();
    var exeSkip = table.rows();
    exeSkip.forEach(function (values) {
        console.log("Total fail :" + values[0]);
    })

});
