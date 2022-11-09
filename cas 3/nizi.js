const array = [];
const animals = ["Cat", "Dog", "Mouse"]

const friends = ["Alex", "Ana", "Peter"];
console.log(animals[2])

animals[0]="Fish"
console.log(animals[0])
animals[3]= "Rabbit"
animals[4]= "Horse"
console.log(animals)
/*animals[10]= "Horse"
console.log(animals)*/
const temporary = animals[0]
animals[0]=animals[4]
animals[4]=temporary
console.log(animals)

animals.push("Goat") // добавляет элемент в конец массива
console.log(animals)

animals.unshift("Sheep") //добавляет элемент в начало массива
console.log(animals)

animals.pop() // чистит элемент с конца массива
//const element1 = animals.pop() - запомнить, что удалили
//animals.push(element1) // вернуть то, что удалили
animals.shift() //чистит элемент с начала массива
console.log(animals)

const length=animals.length //знает, сколько элементов в массиве

console.log([animals]+[friends])

// в массиве могут быть разные данные, слова, буквы, цифры, булен и ладе другие массивы
