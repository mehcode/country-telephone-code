var Cldr = require("cldrjs");
var data = require("cldr-data");
var glob = require("glob");
var path = require("path");
var fs = require("fs");

// Find all supported languages
var filenames = glob.sync(path.join(path.dirname(require.resolve("cldr-data")), "main/*"));
var locales = filenames.map((filename) => path.basename(filename))

// Load suppl. data (required)
Cldr.load(data("supplemental/telephoneCodeData"));

var telephoneData = (new Cldr("")).supplemental("telephoneCodeData");
var result = {};

for (var key in telephoneData) {
  if (key.length === 2) {
    result[key] = telephoneData[key].map((data) => data.telephoneCountryCode);
  }
}

// Write to known file location
fs.writeFileSync("data.json", JSON.stringify({
  countryTelephoneCodes: result,
}));
