# names [![Build Status](https://travis-ci.org/leo/names.svg?branch=master)](https://travis-ci.org/leo/names)

This package acts as an API client for my favorite generator of random names: [uinames](http://uinames.com). It's perfect for prototyping stuff or examples of real names in production apps.

## Usage

Install the package using [npm](https://www.npmjs.com) and save it to the dependency list:

```bash
npm install --save names
```

And then start using it:

```js
import names from 'names'

try {
  const list = await names()
} catch (err) {
  console.error(err)
}
```

## Configuration

