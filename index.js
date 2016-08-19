var DATA = require("./data.json");

function get(countryCode) {
  return DATA.countryTelephoneCodes[countryCode];
}

get.countries = Object.keys(DATA.countryTelephoneCodes);

module.exports = get;
