"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filepath_1 = require("../utility/filepath");
var helper = new commonUtility_1.ElementHelper();
var basePageloc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.basepage);
/**Base page element actions*/
class BasePage {
    constructor() {
        this.dashboard = helper.locatortype(basePageloc.propertiesFileData('loc.tab.dashboard'));
        this.recentRun = helper.locatortype(basePageloc.propertiesFileData('loc.tab.recentrun'));
        this.view = helper.locatortype(basePageloc.propertiesFileData('loc.tab.view'));
        this.productSnapshot = helper.locatortype(basePageloc.propertiesFileData('loc.tab.productsnapshot'));
    }
    clickOnDashboardTab() {
        this.dashboard.click();
    }
    clickOnRecentRunTab() {
        this.recentRun.click();
    }
    clickOnViewTab() {
        this.view.click();
    }
    clickOnProductSnapshot() {
        this.productSnapshot.click();
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9iYXNlcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyREFBd0Q7QUFDeEQsc0VBQXFFO0FBQ3JFLGtEQUErQztBQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUNqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlDQUFvQixDQUFDLG1CQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFHOUQsOEJBQThCO0FBQzlCLE1BQWEsUUFBUTtJQUFyQjtRQUdHLGNBQVMsR0FBRSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDbkYsY0FBUyxHQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNuRixTQUFJLEdBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6RSxvQkFBZSxHQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQW9CbEcsQ0FBQztJQWxCRyxtQkFBbUI7UUFFZixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFDRCxtQkFBbUI7UUFFZixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxjQUFjO1FBRVYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0JBQXNCO1FBRW5CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztDQUVKO0FBMUJELDRCQTBCQyJ9