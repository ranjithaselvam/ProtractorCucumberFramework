import { browser, protractor, by, element } from "protractor"
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";
import { FilePath } from "../utility/filepath";
var helper = new ElementHelper();
var basePageloc = new PropertiesFileReader(FilePath.basepage);
var viewPageLoc = new PropertiesFileReader(FilePath.viewpage);

/*View page element actions*/
export class ViewPage {

    skip = element(by.cssContainingText("option", "Skip"))

    async filterFail() {
        await element(by.cssContainingText("option", "Fail")).click();
    }

    async getFailStatus() {
        await helper.allElement(viewPageLoc.propertiesFileData('loc.txt.testStatus')).getText().then(function (actualFailStatus) {
            console.log("Actual test status :" + actualFailStatus)
            // expect(actualPassStatus).to.contains('Pass');
        })
    }


    async filterSkip() {
        await this.skip.click();
    }

    async getSkipStatus() {
        await helper.allElement(viewPageLoc.propertiesFileData('loc.txt.testStatus')).getText().then(function (actualSkipStatus) {
            console.log("Actual test status :" + actualSkipStatus)
            // expect(actualPassStatus).to.contains('Pass');
        })
    }
}