const temperatures = [15, 16, 17, 20, 15, 20, 21]
let sum=0
for ( const temp of temperatures) {
    sum = sum + temp
}
console.log(sum/temperatures.length)

const pets = ["Cat", "Dog", "Rabbit", "Parrot", "Horse", "Sheep"]
for (let i=1; i < pets.length; i+=2) {
    console.log(pets[i])
}

const validity = [1, 2, null, "Username", undefined, 6, "Password", NaN]

const valid=[]

for (let i=0; i<validity.length; i++) { //1st way
    const el=validity[i]
    if (el) valid.push(el)
}
console.log(valid)

for (const el of validity) { //2nd way
    if (el) valid.push(el)
}
console.log(valid)

validity.forEach(() => {})

validity.forEach((el) => {
    if (el) valid.push(el)
})
console.log(valid)