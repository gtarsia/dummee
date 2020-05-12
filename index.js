
module.exports = function stub(argFn = () => {}) {
  const fn = function innerStub(...args) {
    fn.calls.push({ args })
    return fn.cb(...args)
  }
  fn.cb = argFn
  fn.calls = []
  return fn
}
