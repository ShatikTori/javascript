let person = {
  //properties or keys 
  //key - value pairs
  gender: 'female',
  age: 33,
  height: 161,
  weight: null, 
  eat: function () {console.log("I ate an apple")},
  parent: {
    age: 60
  }
  //eat: () => {} //так тоже можно функцию объявить
} //это объект

let person2 = {
  name: "Vika",
  gender: 'male',
  age: 22,
  height: 181,
  weight: 90, 
  eat: function () {console.log("${person2.name}  ate a banana")}//посмотреть потом
} 

console.log(person)
console.log(person.gender)
console.log(person['gender'])
//person.gender = 'male'
console.log(person.gender)
//delete person.gender
console.log(person.gender)

person2.weight = 100
// если сделать персону=персоне2 и поменять вес, например, одной персоне, то у всех персон и вес и все остальное будет одинаково, просто ужас. С массивами такая же песня, не делать так!
//а как тогда копировать данные? так:
let person3 = {...person}//3 персона будет такая же, как первая
person3.age = 15
person3.weight = 150

console.log(person)
console.log(person2)
console.log(person3)
let person4 = Object.assign({profession: 'programmer'}, person2)
console.log(person4)
let person5 = {...person3, profession: 'teacher', age: 40}
console.log(person5)
person5.eat()
const apple = person5.eat()
person2.eat()