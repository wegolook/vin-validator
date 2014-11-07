# VIN Validator

This module does simple VIN validation. It checks for proper length, characters, and a valid check digit.

## Usage

```js
var vinValidator = require('vin-validator');
var isValidVin = vinValidator.validate('11111111111111111'); // true
```
