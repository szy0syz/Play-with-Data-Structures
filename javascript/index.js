import DArray from './Array/03-Add-Element-in-Array'

const ary = new DArray()
ary.addLast(44)
ary.addLast(44)
ary.addLast(44)
ary.addLast(44)
ary.addLast(44)

ary.add(2, 55)

console.log(ary.getSize())
console.dir(ary)