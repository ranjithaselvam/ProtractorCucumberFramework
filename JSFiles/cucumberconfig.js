"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    // multiCapabilities:[
    //   {
    //     "browserName": 'chrome'
    //   },
    //   {
    //   "browserName": 'firefox'
    //   }
    // ],
    // useAllAngular2AppRoots: true,
    baseurl: "http://10.10.10.231:8082/#/app/dashboard",
    onPrepare: () => {
        protractor_1.browser.manage().window().maximize();
    },
    specs: ['../features/dashboard.feature'],
    cucumberOpts: {
        require: [
            './stepdefinitions/dashboard.js',
            './support/hooks.js',
        ],
        format: 'json:report/cucumber_report.json',
    },
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  83.0.4103.116",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNkM7QUFHaEMsUUFBQSxNQUFNLEdBQVc7SUFFNUIsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLE9BQU87SUFDUCxNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLE1BQU07SUFDTixLQUFLO0lBRUwsZ0NBQWdDO0lBQ2hDLE9BQU8sRUFBRSwwQ0FBMEM7SUFDbkQsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNkLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELEtBQUssRUFBRSxDQUFDLCtCQUErQixDQUFDO0lBQ3hDLFlBQVksRUFBRTtRQUVaLE9BQU8sRUFBRTtZQUVQLGdDQUFnQztZQUNoQyxvQkFBb0I7U0FDckI7UUFDRCxNQUFNLEVBQUUsa0NBQWtDO0tBRzNDO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRWpELElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxNQUFNLEVBQUUsNkJBQTZCO1lBQ3JDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDckI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBRUEsQ0FBQyJ9