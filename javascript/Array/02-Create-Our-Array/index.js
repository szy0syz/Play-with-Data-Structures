class DArray {
  // private int[] _data;
  // private int _size;

  constructor(capacity = 10) {
    this._data = new Array(capacity)
    this._size = 0
  }

  getCapacity() {
    return this._data.length
  }

  getSize() {
    return this._size
  }

  isEmpty() {
    return this._size === 0
  }
}

export default DArray
