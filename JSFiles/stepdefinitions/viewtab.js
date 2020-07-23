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
const homepage_1 = require("../pages/homepage");
var homePage = new homepage_1.HomePage();
cucumber_1.Then(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 90000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.clickOnProjectLink();
}));
cucumber_1.Then(/^Select status as pass$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    homePage.filterpass();
}));
// Then(/^Able to get pass test cases$/, { timeout: 50000 }, async (table: TableDefinition) => {
//     var detail = table.raw();
//     var status = await element(by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
//     console.log(status);
//     detail.forEach(function (value) {
//         console.log("expec :" + value);
//     });
// });
cucumber_1.Then(/^Able to get pass test cases$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.getPassStatus();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3RhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy92aWV3dGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsdUNBQXVEO0FBQ3ZELGdEQUE2QztBQUc3QyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUM5QixlQUFJLENBQUMsZ0RBQWdELEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQ2xGLE1BQU0sUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDM0QsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnR0FBZ0c7QUFDaEcsZ0NBQWdDO0FBQ2hDLG9IQUFvSDtBQUVwSCwyQkFBMkI7QUFHM0Isd0NBQXdDO0FBRXhDLDBDQUEwQztBQUUxQyxVQUFVO0FBRVYsTUFBTTtBQVVOLGVBQUksQ0FBQywrQkFBK0IsRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBQyxHQUFTLEVBQUU7SUFDbkUsTUFBTSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9