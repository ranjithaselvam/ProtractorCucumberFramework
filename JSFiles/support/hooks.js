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
const protractor_1 = require("protractor");
const cucumberconfig_1 = require("../cucumberconfig");
const cucumber_1 = require("cucumber");
cucumber_1.BeforeAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(cucumberconfig_1.config.baseurl);
    //browser.manage().timeouts().implicitlyWait(120000);
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            var attach = this.attach;
            return protractor_1.browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, "base64");
                return attach(decodedImage, "image/png");
            });
        }
    });
});
cucumber_1.AfterAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.close();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdXBwb3J0L2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsMkNBQXFDO0FBQ3JDLHNEQUEyQztBQUMzQyx1Q0FBOEQ7QUFHOUQsb0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxxREFBcUQ7QUFHekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDMUIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUUxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE9BQU8sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUM5QyxJQUFJLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sTUFBTSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztTQUVOO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILG1CQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUN6QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9