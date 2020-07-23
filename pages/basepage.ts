import { browser, protractor,by,element} from "protractor"
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";
import { FilePath } from "../utility/filepath";
var helper = new ElementHelper();
var basePageloc = new PropertiesFileReader(FilePath.basepage);


/**Base page element actions*/
export class BasePage{


   dashboard =helper.locatortype(basePageloc.propertiesFileData('loc.tab.dashboard'));
   recentRun= helper.locatortype(basePageloc.propertiesFileData('loc.tab.recentrun'));
   view= helper.locatortype(basePageloc.propertiesFileData('loc.tab.view'));
   productSnapshot= helper.locatortype(basePageloc.propertiesFileData('loc.tab.productsnapshot'));

    clickOnDashboardTab()
    {
        this.dashboard.click();

    }
    clickOnRecentRunTab()
    {
        this.recentRun.click();
    }
    clickOnViewTab()
    {
        this.view.click();
    }
    clickOnProductSnapshot()
    {
       this.productSnapshot.click();
    }
    
}