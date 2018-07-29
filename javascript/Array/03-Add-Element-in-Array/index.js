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

    addLast(e) {
      this.add(this[_size], e)
    }

    addFirst(e) {
      this.add(0, e)
    }

    add(index, e) {
      let data = this[_data]
      // 只能引用类型保存地址，值类型不能转存
      // let size = this[_size]

      if (this[_size] === data.length) {
        throw new Error('Add failed. Array is full.')
      }
      if (index < 0 || index > this[_size]) {
        console.log(this[_size], index)
        throw new Error('Add failed. Require index >=0 and index <= size.')
      }
      // 一次把index索引后的元素后移
      for (let i = this[_size] - 1; i >= index; i--) {
        data[i + 1] = data[i]
      }

      data[index] = e
      this[_size]++
    }
  }

  return DArray
})()

export default DArray

