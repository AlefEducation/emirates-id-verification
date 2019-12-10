# emirates-id-verification
NPM Module to validate Emirates ID

This module will allow you to verify Emirates ID from a string input and a boolean output


## Install

```
$ npm install emirates-id-verification
```

```
$ yarn add emirates-id-verification
```

## Usage

```js

import validate from 'emirates-id-verification';

const id = '123-1234-0123456-7';

const result = validate(id);
// Will return false

if (result) {
  // do something
}

```

## MIT Licenced
Alef Education All Rights Reserved