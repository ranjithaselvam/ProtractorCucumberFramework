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
exports.ViewPage = void 0;
const protractor_1 = require("protractor");
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filepath_1 = require("../utility/filepath");
var helper = new commonUtility_1.ElementHelper();
var basePageloc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.basepage);
var viewPageLoc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.viewpage);
/*View page element actions*/
class ViewPage {
    constructor() {
        this.skip = protractor_1.element(protractor_1.by.cssContainingText("option", "Skip"));
    }
    filterFail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.cssContainingText("option", "Fail")).click();
        });
    }
    getFailStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.allElement(viewPageLoc.propertiesFileData('loc.txt.testStatus')).getText().then(function (actualFailStatus) {
                console.log("Actual test status :" + actualFailStatus);
                // expect(actualPassStatus).to.contains('Pass');
            });
        });
    }
    filterSkip() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.skip.click();
        });
    }
    getSkipStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper.allElement(viewPageLoc.propertiesFileData('loc.txt.testStatus')).getText().then(function (actualSkipStatus) {
                console.log("Actual test status :" + actualSkipStatus);
                // expect(actualPassStatus).to.contains('Pass');
            });
        });
    }
}
exports.ViewPage = ViewPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy92aWV3cGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkQ7QUFDN0QsMkRBQXdEO0FBQ3hELHNFQUFxRTtBQUNyRSxrREFBK0M7QUFDL0MsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDakMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlELElBQUksV0FBVyxHQUFHLElBQUkseUNBQW9CLENBQUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUU5RCw2QkFBNkI7QUFDN0IsTUFBYSxRQUFRO0lBQXJCO1FBRUksU0FBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBd0IxRCxDQUFDO0lBdEJTLFVBQVU7O1lBQ1osTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNmLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLGdCQUFnQjtnQkFDbkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFBO2dCQUN0RCxnREFBZ0Q7WUFDcEQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFHSyxVQUFVOztZQUNaLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNmLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLGdCQUFnQjtnQkFDbkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFBO2dCQUN0RCxnREFBZ0Q7WUFDcEQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQTFCRCw0QkEwQkMifQ==