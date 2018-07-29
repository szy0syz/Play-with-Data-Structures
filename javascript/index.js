import DArray from './Array/05-Contain-Find-and-Remove'

const ary = new DArray(20)

for(let i =0; i<10; i++) {
  ary.addLast(i)
}

console.log(ary.toString())
ary.removeElement(7)

console.log(ary.toString())
