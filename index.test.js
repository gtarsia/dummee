const test = require('ava')
const stub = require('.')

test('stub flow', (t) => {
  let n = 0
  const fn = () => {
    n = 1
    return 5
  }
  const s = stub(fn)
  t.deepEqual(s.calls, [])
  t.is(s(1, null, 3), 5)
  t.deepEqual(s.calls, [{ args: [1, null, 3] }])
  t.is(n, 1)
  t.deepEqual(s.calls, [{ args: [1, null, 3] }])
})
