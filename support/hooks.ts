
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../cucumberconfig";
import { BeforeAll, After, AfterAll, Status } from "cucumber";


BeforeAll({ timeout: 100 * 1000 }, async () => {
    await browser.get(config.baseurl);
    //browser.manage().timeouts().implicitlyWait(120000);
   
 
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {

        var attach = this.attach;
        return browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });

    }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.close();
});

