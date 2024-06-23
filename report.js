const reporter = require("cucumber-html-reporter");
const options = {
  //themes - bootstrap/hierarchy/foundation/simple
  theme: "bootstrap",
  jsonFile: "cucumber_report.json",
  output: "cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
