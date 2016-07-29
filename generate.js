var Cldr = require("cldrjs");
var data = require("cldr-data");
var glob = require("glob");
var path = require("path");
var fs = require("fs");

// Find all supported languages
var filenames = glob.sync(path.join(path.dirname(require.resolve("cldr-data")), "main/*"));
var locales = filenames.map((filename) => path.basename(filename))

// Load suppl. data (required)
Cldr.load(data("supplemental/likelySubtags"));
Cldr.load(data("supplemental/codeMappings"));

// Mapping Data
// ============
var codeMappings = (new Cldr("")).supplemental("codeMappings");
var resultCountry = {};

Object.keys(codeMappings).forEach((key) => {
  if (codeMappings[key]._alpha3) {
    resultCountry[codeMappings[key]._alpha3] = key;
  }
});

// Language Data
// =============

var resultNames = {};
locales.forEach((locale) => {
  // Locale specific data
  Cldr.load(data("main/" + locale + "/territories"));

  // Bind to locale
  var cldr = new Cldr(locale);

  // Grab language code (minimal)
  var lang = cldr.attributes.minLanguageId.split("-")[0];
  if (resultNames[lang] == null) {
    resultNames[lang] = cldr.main("localeDisplayNames/territories");
  }
});

// Write to known file location
fs.writeFileSync("data.json", JSON.stringify({
  countryNames: resultNames,
  country: resultCountry,
}));
