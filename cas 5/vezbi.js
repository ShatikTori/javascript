const kvadrat={
  width: 100,
  heigth: 50
}

let calculateArea = (square) => {
  return square.width*square.height
}
console.log(calculateArea(kvadrat))

const person1 = {
  name: 'Vika',
  pets: ['Cat', 'Dog', 'Parrot']
}
const person2 = {
  name: 'Ana',
  pets: ['Turtle', 'Dog']
}
const people = [person1, person2]

function displayPets (people) {
  people.forEach((_person) => {
    console.log('${person.name} has ${person.pets.length} pets.')//и это
  });
  
}
person2.displayPets

