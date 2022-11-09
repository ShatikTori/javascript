/*while (uslov) {
    // code
} 


do {
     //code
} while (uslov)*/

/*let number = 1;
while (6>number) {
    console.log("6 is bigger than "+number)
    number=number+1 //number +=1 or number ++
}*/
let i=0
while (i<=20) {
    console.log(i)
    i ++
}
const pets=["Cat", "Dog", "Rabbit", "Parrot"]
let x=0
while (x < pets.length) {
    console.log(pets[x])
    x++
}

for (let i=0; i<pets.length; i++) {
    console.log(pets[i])
}
for (let i=pets.length-1; i>=0; i--) {
    console.log(pets[i])
}
for (let pet of pets) {
    console.log(pet)
}

