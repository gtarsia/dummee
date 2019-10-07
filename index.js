
module.exports = function stub(argFn = () => {}) {
  const fn = function innerStub(...args) {
    fn.calls.push({ args })
    return argFn(...args)
  }
  fn.calls = []
  return fn
}
