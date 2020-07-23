"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const commonUtility_1 = require("../helper/commonUtility");
const basepage_1 = require("../pages/basepage");
const dashboardpage_1 = require("../pages/dashboardpage");
const viewpage_1 = require("../pages/viewpage");
var _ = require('lodash');
let helper = new commonUtility_1.ElementHelper();
var basePage = new basepage_1.BasePage();
var dashboardPage = new dashboardpage_1.DashboardPage();
var viewPage = new viewpage_1.ViewPage();
/* View Page Validation and Verification*/
cucumber_1.When(/^select view tab in main naviagtion$/, { timeout: 250000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    basePage.clickOnViewTab();
}));
cucumber_1.When(/^filter the status as pass in select status$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    dashboardPage.filterpass();
}));
cucumber_1.Then(/^able to get pass test cases$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.getPassStatus();
    var exepass = table.hashes();
    _.each(exepass, function (passrow) {
        console.log("expected data:" + passrow.Status);
    });
}));
cucumber_1.When(/^filter the status as fail in select status$/, { timeout: 250000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewPage.filterFail();
}));
cucumber_1.Then(/^able to get fail test case$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    yield viewPage.getFailStatus();
    var exefail = table.rows();
    exefail.forEach(function (value) {
        console.log("Total fail :" + value[2]);
    });
}));
cucumber_1.Then(/^filter the status as skip in the select status$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewPage.filterSkip();
}));
cucumber_1.Then(/^able to get skip test case$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    yield viewPage.getFailStatus();
    var exeSkip = table.rows();
    exeSkip.forEach(function (values) {
        console.log("Total fail :" + values[0]);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQThEO0FBRzlELDJEQUF3RDtBQUt4RCxnREFBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELGdEQUE2QztBQUc3QyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDakMsSUFBSSxRQUFRLEdBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDNUIsSUFBSSxhQUFhLEdBQUMsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDdEMsSUFBSSxRQUFRLEdBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFFNUIsMENBQTBDO0FBRTFDLGVBQUksQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFFMUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRTdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsOENBQThDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQUUsR0FBUyxFQUFFO0lBQy9FLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUUvQixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLCtCQUErQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sS0FBc0IsRUFBRSxFQUFFO0lBRTFGLE1BQU8sYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLE9BQVk7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFFRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDhDQUE4QyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNqRixNQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sS0FBc0IsRUFBRSxFQUFFO0lBRXZGLE1BQU0sUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTlCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsa0RBQWtELEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBRXJGLE1BQU0sUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBTyxLQUFzQixFQUFFLEVBQUU7SUFFdkYsTUFBTSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9