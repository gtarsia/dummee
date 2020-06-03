
module.exports = function dummee(argFn = () => {}) {
  const fn = function stub(...args) {
    fn.calls.push({ args })
    return fn.cb(...args)
  }
  fn.cb = argFn
  fn.calls = []
  return fn
}
