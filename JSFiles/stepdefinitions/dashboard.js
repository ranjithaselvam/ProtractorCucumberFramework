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
const dashboardpage_1 = require("../pages/dashboardpage");
var _ = require('lodash');
var dashboardPage = new dashboardpage_1.DashboardPage();
/**Dashboard page verification and validation  */
cucumber_1.Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 90000 }, (expectedUrl) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.toCheckUserLandOnDashboard(expectedUrl);
}));
cucumber_1.Then(/^Verify the refersh icon is available on the tab dashboard page$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.toCheckIconAvailable();
}));
cucumber_1.Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 90000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.toCheckLogo();
}));
cucumber_1.Then(/^Verify whether all the project available on the dashboard page by project count$/, { timeout: 50000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    var expectedList = table.rowsHash();
    console.log("expected :" + expectedList.listOfItemCount);
    yield dashboardPage.listOfAvailableProjects();
}));
cucumber_1.When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.clickOnProjectLink();
}));
cucumber_1.Then(/^Select status as pass$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.filterpass();
}));
cucumber_1.Then(/^Able to get only pass test cases$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    var expecedStatus = table.rowsHash();
    console.log("expected status :" + expecedStatus.satus);
    yield dashboardPage.getPassStatus();
}));
cucumber_1.When(/^User click on toggle button$/, { timeout: 80000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashboardPage.clickOnToggle();
}));
cucumber_1.Then(/^User can able to view test status$/, { timeout: 80000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    var expectedData = table.rowsHash();
    console.log("expected test details :" + expectedData.testrun, "\n" + "totalpass :" + expectedData.pass, "\n" + "total fail :" + expectedData.fail, "\n" + "total skip :" + expectedData.skip, "\n");
    yield dashboardPage.toGetTestcaseDetails();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1RDtBQUN2RCwwREFBdUQ7QUFHdkQsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLElBQUksYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBRXhDLGlEQUFpRDtBQUVqRCxlQUFJLENBQUMsd0RBQXdELEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBTyxXQUFXLEVBQUUsRUFBRTtJQUNyRyxNQUFNLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtFQUFrRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNwRyxNQUFNLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNENBQTRDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzlFLE1BQU0sYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUZBQW1GLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBTyxLQUFzQixFQUFFLEVBQUU7SUFDM0ksSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUN4RCxNQUFNLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBRWxELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBRWxGLE1BQU0sYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDM0QsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLEtBQXNCLEVBQUUsRUFBRTtJQUM1RixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsTUFBTSxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDbkUsTUFBTyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLEtBQXFCLEVBQUUsRUFBRTtJQUM1RixJQUFJLFlBQVksR0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksR0FBQyxhQUFhLEdBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLEdBQUMsY0FBYyxHQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxHQUFDLGNBQWMsR0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JMLE1BQU0sYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9