
function dummee(argFn = () => {}) {
  const fn = function stub(...args) {
    fn.calls.push({ args })
    return fn.cb(...args)
  }
  fn.cb = argFn
  fn.calls = []
  return fn
}

dummee.stubIfTest = function stubIfTest(fn) {
  return process.env.NODE_ENV === 'test' ? dummee(fn) : fn
}

module.exports = dummee
