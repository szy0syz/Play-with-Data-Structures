const DArray = (function () {
  let _data = Symbol('data')
  let _size = Symbol('size')

  class DArray {
    constructor(capacity = 10) {
      this[_data] = new Array(capacity)
      this[_size] = 0  // 指向数组最后一个有效元素后的索引
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

    get(index) {
      const data = this[_data]
      if (index < 0 || index >= this[_size]) {
        throw new Error('Get failed. Index is illegal.')
      }

      return data[index]
    }

    set(index, e) {
      const data = this[_data]
      if (index < 0 || index >= this[_size]) {
        throw new Error('Get failed. Index is illegal.')
      }

      data[index] = e
    }

    toString() {
      const data = this[_data]
      let res = `Array: size = ${this[_size]} , capacity = ${data.length}\n`
      res += '['
      for (let i = 0; i < this[_size]; i++) {
        res += data[i]
        if (i !== this[_size] - 1) {
          res += ', '
        }
      }
      res += ']'
      return res
    }

    // 查找数组中是否有指定元素e
    contains(e) {
      const data = this[_data]
      for (let i = 0; i < this[_size]; i++) {
        if (data[i] === e) {
          return true
        }
      }
      return false
    }

    // 查找数组中指定元素e所在的索引，如果不存在就返回-1
    find(e) {
      const data = this[_data]
      for (let i = 0; i < this[_size]; i++) {
        if (data[i] === e) {
          return i
        }
      }
      return -1
    }

    remove(index) {
      const data = this[_data]
      if (index < 0 || index >= this[_size]) {
        throw new Error('Get failed. Index is illegal.')
      }
      // 预先准备好要返回的元素
      let ret = data[index]
      // 循环后一个元素赋值到前一个元素
      for (let i = index; i < this[_size]; i++) {
        data[i] = data[i + 1]
      }
      // 指针减一
      this[_size]--
      // 虽然说用户永远不会访问到这个没被删除的元素，还是处理下
      data[this[_size]] = undefined

      return ret
    }

    removeFirst() {
      return this.remove(0)
    }

    removeLast() {
      return this.remove(this[_size] - 1)
    }

    // 删除指定值的元素，如果存在的话
    removeElement(e) {
      // 先查索引
      const index  = this.find(e)
      // 如果存在就删除
      if (index !== -1) {
        this.remove(index)
        return true
      }
      return false
    }

  }
  return DArray
})()

export default DArray

