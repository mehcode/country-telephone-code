var DATA = require(__dirname + "/data.json");

function get(countryCode, language) {
  var key = DATA.country[countryCode];
  return DATA.countryNames[language][key];
}

module.exports = get;
