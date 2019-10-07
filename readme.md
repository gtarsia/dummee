
# dummee

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
