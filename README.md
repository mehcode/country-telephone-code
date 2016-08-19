# Country Name
> Simple getter for telephone codes for all countries (backed by a script that dumps data direct from the CLDR).

## Install

```bash
npm i country-telephone-code --save
```

## Usage

```js
import countryTelephoneCode, {countries} from "country-telephone-code";

// countryTelephoneCode( 2-LETTER COUNTRY CODE )
countryTelephoneCode("US"); // 1
countryTelephoneCode("JA"); // 81
countryTelephoneCode("ZW"); // 263
```
