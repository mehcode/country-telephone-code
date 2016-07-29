# Country Name
> Simple getter for country names in _all_ languages (backed by a script that dumps data direct from the CLDR).

## Install

```bash
npm i country-name --save
```

## Usage

```js
import countryName from "country-name";

// countryName( 3-LETTER COUNTRY CODE , LANGUAGE SUBTAG )
countryName("USA", "en"); // United States
countryName("USA", "ja"); // アメリカ合衆国
countryName("JPN", "en"); // Japan
countryName("JPN", "ja"); // 日本
```

## Contributing

Pull requests are always welcome.

 - Some method of only including a set of langauges rather than ALL of them (maybe package.json based config)
 - Remote loading of data (would fair better for websites)
