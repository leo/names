# names [![Build Status](https://travis-ci.org/leo/names.svg?branch=master)](https://travis-ci.org/leo/names)

This package acts as an API client for my favorite generator of random names: [uinames](http://uinames.com). It's perfect for prototyping stuff or examples of real names in production apps.

## Usage

Install the package using [npm](https://www.npmjs.com) and save it to the dependency list:

```bash
npm install --save names
```

Now you have two choices to interact with the package. Since it's based on the concept of [promises](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), you can either use async/await (it hasn't yet landed in node, so you'll have to [transpile](https://gist.github.com/rauchg/8199de60db48026a6670620a1c33b700) the code)...

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

Both examples will result in a response that looks like the following:

```json
{
  "name": "John",
  "surname": "Doe",
  "gender": "male",
  "region": "United States"
}
```

## Configuration

Indipendent from which of the methods mentioned above you would like to use, you can always pass a configuration object to the module's main method:

```js
names({
  gender: 'female',
  amount: 10
  ...
})
```

Here's the full list of all available options:

| Name | Description | Type |
| ---- | ----------- | ---- |
| amount | Amount of names to return, between `1` and `500` | Integer |
| gender | Limit results to the `male` or `female` gender | String |
| region | Region-specific results | String |
| minLength | Require a minimum number of characters in a name | Integer |
| maxLength | Require a maximum number of characters in a name | Integer |

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Transpile the source code and watch for changes: `npm start`
4. Within the module you want to test your local development instance of names, just link it to the dependencies: `npm link names`. Instead of the default one from npm, node will now use your clone of names!
