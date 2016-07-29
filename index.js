var DATA = require("./data.json");

var country3To2 = {};
Object.keys(DATA.country).map((key) => {
  if (DATA.country[key]._alpha3) {
    country3To2[DATA.country[key]._alpha3] = key;
  }
});

function getName(countryCode, language) {
  var key = country3To2[countryCode];
  return DATA.countryNames[language][key];
}

module.exports = {
  getName,
};
