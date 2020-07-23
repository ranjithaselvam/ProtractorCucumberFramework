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
exports.DashboardPage = void 0;
const protractor_1 = require("protractor");
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filepath_1 = require("../utility/filepath");
const chai = require("chai");
chai.use(require('chai-smoothie'));
const expect = chai.expect;
var helper = new commonUtility_1.ElementHelper();
var dashboardloc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.dashboardPage);
/**dasnboard page element actions */
class DashboardPage {
    toCheckUserLandOnDashboard(value) {
        return __awaiter(this, void 0, void 0, function* () {
            var actualUrl = yield helper.getPageCurrentUrl().then(function (actualUrl) {
                console.log("Actual URL :" + actualUrl);
                expect(actualUrl).to.be.contains(value);
            });
        });
    }
    toCheckIconAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.elementAvailable(dashboardloc.propertiesFileData('loc.icon.refresh')).then(function (value) {
                expect(value).to.eventually.equal(true);
            });
        });
    }
    toCheckLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.elementIsDisplay(dashboardloc.propertiesFileData("loc.logo.homepage")).then(function (value) {
                expect(value).to.eventually.be.equal(true);
            });
        });
    }
    listOfAvailableProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            var listOfProject = yield helper.allElement(dashboardloc.propertiesFileData("loc.txt.listOfItem")).getText()
                .then(function (listOfProject) {
                expect(listOfProject.length).to.equal(43);
            });
        });
    }
    clickOnProjectLink() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.clickOnElement(dashboardloc.propertiesFileData("loc.link.restapi"));
        });
    }
    filterpass() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.cssContainingText("option", "Pass")).click();
        });
    }
    getPassStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.allElement(dashboardloc.propertiesFileData('loc.txt.passStatus')).getText().then(function (actualPassStatus) {
                console.log("Actual test status :" + actualPassStatus);
                // expect(actualPassStatus).to.contains('Pass');
            });
        });
    }
    clickOnToggle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.clickOnElement(dashboardloc.propertiesFileData('loc.btn.toggle'));
        });
    }
    toGetTestcaseDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.locatortype(dashboardloc.propertiesFileData('loc.txt.totaltestcase')).getText().then(function (value) {
                expect(value).to.be.contains(10);
            });
        });
    }
}
exports.DashboardPage = DashboardPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2Rhc2hib2FyZHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLDJEQUF3RDtBQUN4RCxzRUFBcUU7QUFDckUsa0RBQStDO0FBQy9DLDZCQUE4QjtBQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDakMsSUFBSSxZQUFZLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBSXBFLG9DQUFvQztBQUNwQyxNQUFhLGFBQWE7SUFFaEIsMEJBQTBCLENBQUMsS0FBYTs7WUFDMUMsSUFBSSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxTQUFTO2dCQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQTtnQkFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUssb0JBQW9COztZQUN0QixNQUFNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQWM7Z0JBQzVHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsTUFBTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFjO2dCQUM3RyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9DLENBQUMsQ0FBQyxDQUFBO1FBRU4sQ0FBQztLQUFBO0lBRUssdUJBQXVCOztZQUN6QixJQUFJLGFBQWEsR0FBRyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7aUJBQ3ZHLElBQUksQ0FBQyxVQUFVLGFBQWE7Z0JBQ3pCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUM3QyxDQUFDLENBQUMsQ0FBQTtRQUVWLENBQUM7S0FBQTtJQUVLLGtCQUFrQjs7WUFDcEIsTUFBTSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQztLQUFBO0lBSUssVUFBVTs7WUFDWixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xFLENBQUM7S0FBQTtJQUtLLGFBQWE7O1lBQ2YsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsZ0JBQWdCO2dCQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGdCQUFnQixDQUFDLENBQUE7Z0JBQ3RELGdEQUFnRDtZQUdwRCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUlLLGFBQWE7O1lBQ2YsTUFBTSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQztLQUFBO0lBR0ssb0JBQW9COztZQUV0QixNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO2dCQUM3RyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQXBFRCxzQ0FvRUMifQ==