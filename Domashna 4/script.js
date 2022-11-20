//1 Немам решение
//2 - работи само со првата буква од елементот

const names = ['koco nica', 'alek Dimitriev']
function capitalizeWords(array) {
  return array.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}

console.log(capitalizeWords(names))

//3

const myAnimals = [
  { type: 'Horse', numberOfLegs: 4 },
  { type: 'Sheep', numberOfLegs: 4 },
  { type: 'Chicken', numberOfLegs: 2 },
  { type: 'Fish', numberOfLegs: 0 },
  { type: 'Dog', age: 7, numberOfLegs: 4 },
  { type: 'Goat', numberOfLegs: 4 }
]
function calculateLegs (animals) {
  return animals.reduce((currentSum, animal) => {
    if (!animal.read) {
      return currentSum += animal.numberOfLegs
    }
    return currentSum
  }, 0)
}

console.log(calculateLegs(myAnimals))

//4
const team = [{
  wins: 1, //+3
  losses: 2, //-2
  draws: 0 //+1
}] 

function countPoints(points) {
  return points.reduce ((currentSum, point) => {
    if (!point.read) {
    return currentSum = point.wins*3 + point.losses*(-2)+point.draws*1
    }
    return currentSum;
  }, 0);
}

console.log(countPoints(team));

//5
const myBooks = [
  {
    author: 'Fyodor Dostoyevsky',
    name: 'Crime and punishment',
    year: 1887,
    ISBN: 1,
    price: 500,
    read: false
  },
  {
    author: 'J.K. Rowling',
    name: 'Harry Potter',
    year: 2000,
    ISBN: 2,
    price: 600,
    read: false
  },
  {
    author: 'J.R.R. Tolkien',
    name: 'The Hobbit',
    year: 1910,
    ISBN: 3,
    price: 1000,
    read: true
  },
  {
    author: 'Aleksey Tolstoy',
    name: 'Voina i mir',
    year: 1873,
    ISBN: 4,
    price: 2000,
    read: true
  }
]

let sorted_by_author = myBooks.sort( (a,b) => a.author > b.author ? 1:-1 );

console.log(myBooks);
