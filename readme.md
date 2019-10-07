
# dummee

[![Build Status](https://travis-ci.org/zzyyxxww/dummee.svg?branch=master)](https://travis-ci.org/zzyyxxww/dummee)
[![codecov](https://codecov.io/gh/zzyyxxww/dummee/branch/master/graph/badge.svg)](https://codecov.io/gh/zzyyxxww/dummee)
[![Maintainability](https://api.codeclimate.com/v1/badges/f103756df8cb1910959c/maintainability)](https://codeclimate.com/github/zzyyxxww/dummee/maintainability)

lightweight stub/dummy function to test things.

pretty much like [ninos](https://github.com/jamiebuilds/ninos) but standalone.

* lightweight
* intuitive api

```javascript
const stub = require('dummee')

const fn1 = stub()
fn1(1, 2) // => undefined
fn1.calls // => [{ args: [1, 2] }]

const fn2 = stub((i, j) => i + j)
fn2(2, 3) // => 5
```

[when to use stubbing](./docs/when-to-use-stubbing.md)

## install

`yarn add --dev dummee` or  
`npm install --save-dev dummee`

## open to contributions

help is needed in:
* typescript definition and type check tests.
