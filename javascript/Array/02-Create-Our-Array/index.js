const DArray = (function () {
  let _data = Symbol('data')
  let _size = Symbol('size')

  class DArray {
    constructor(capacity = 10) {
      this[_data] = new Array(capacity)
      this[_size] = 0
    }

    getCapacity() {
      return this[_data].length
    }

    getSize() {
      return this[_size]
    }

    isEmpty() {
      return this[_size] === 0
    }
  }

  return DArray
})()

export default DArray
