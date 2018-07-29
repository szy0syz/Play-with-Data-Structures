import DArray from './Array/04-Query-and-Update-Element'

const ary = new DArray(20)

for(let i =0; i<10; i++) {
  ary.addLast(i)
}

ary.add(2, 55)

console.log('ary.get', ary.get(2))

console.log(ary.toString())

console.log(ary.getSize())
console.dir(ary)