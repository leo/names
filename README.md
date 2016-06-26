# names [![Build Status](https://travis-ci.org/leo/names.svg?branch=master)](https://travis-ci.org/leo/names)

This package acts as an API client for my favorite generator of random names: [uinames](http://uinames.com). It's perfect for prototyping stuff or examples of real names in production apps.

## Usage

Install the package using [npm](https://www.npmjs.com) and save it to the dependency list:

```bash
npm install --save names
```

Now you have two choices to interact with the package. Since it's based on the concept of [promises](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), you can either use async/await (it hasn't yet landed in node, so you'll have to use a transpiler)...

```js
import names from 'names'

try {
  const list = await names()
} catch (err) {
  console.error(err)
}
```

...or the old way of doing it:

```js
const names = require('names')()

names.then(function (list) {
  console.log(list)
})

names.catch(function (err) {
  console.error(err)
})
```

## Configuration

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Transpile the source code and watch for changes: `npm start`
4. Within the module you want to test your local development instance of names, just link it to the dependencies: `npm link names`. Instead of the default one from npm, node will now use your clone of names!
