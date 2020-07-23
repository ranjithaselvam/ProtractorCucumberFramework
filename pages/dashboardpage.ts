import { by, element } from "protractor";
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";
import { FilePath } from "../utility/filepath";
import chai = require('chai');
chai.use(require('chai-smoothie'));
const expect = chai.expect;

var helper = new ElementHelper();
var dashboardloc = new PropertiesFileReader(FilePath.dashboardPage);



/**dasnboard page element actions */
export class DashboardPage {

    async toCheckUserLandOnDashboard(value: string) {
        var actualUrl = await helper.getPageCurrentUrl().then(function (actualUrl) {
            console.log("Actual URL :" + actualUrl)
            expect(actualUrl).to.be.contains(value);
        });
    }

    async toCheckIconAvailable() {
        await helper.elementAvailable(dashboardloc.propertiesFileData('loc.icon.refresh')).then(function (value: boolean) {
            expect(value).to.eventually.equal(true);
        });
    }

    async toCheckLogo() {
        await helper.elementIsDisplay(dashboardloc.propertiesFileData("loc.logo.homepage")).then(function (value: boolean) {
            expect(value).to.eventually.be.equal(true);

        })

    }

    async listOfAvailableProjects(value:any) {
        var listOfProject = await helper.allElement(dashboardloc.propertiesFileData("loc.txt.listOfItem")).getText()
            .then(function (listOfProject) {
                //expect(listOfProject.length).to.equal(43)
                expect(listOfProject.length).to.equal(value);

            })

    }

    async clickOnProjectLink() {
        await helper.clickOnElement(dashboardloc.propertiesFileData("loc.link.restapi"));
    }



    async filterpass() {
        await element(by.cssContainingText("option", "Pass")).click();
    }




    async getPassStatus() {
        await helper.allElement(dashboardloc.propertiesFileData('loc.txt.passStatus')).getText().then(function (actualPassStatus) {
            console.log("Actual test status :" + actualPassStatus)
            // expect(actualPassStatus).to.contains('Pass');


        })
    }



    async clickOnToggle() {
        await helper.clickOnElement(dashboardloc.propertiesFileData('loc.btn.toggle'));
    }


    async toGetTestcaseDetails() {
      
        await helper.locatortype(dashboardloc.propertiesFileData('loc.txt.totaltestcase')).getText().then(function (value) {
            expect(value).to.be.contains(10);
        });

    }

}