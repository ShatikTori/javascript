/*1. Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza. Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza

2. Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj

3. Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.

4. Od proizvolna niza so bukvi da se formira zbor, na toj nacin sto sekoja bukva kje se spoi so narednata za da formira string.

5. Da se napise programa koja sto kje proveri dali vo nekoja proizvolna niza ima pod-niza, i dokolku ima site elementi od podnizata da se dodadat na krajot od originalnata niza.
Primer: [1, 2, [3, 4], 5, 6] ===> [1, 2, 5, 6, 3, 4]*/

//1
const massiv = [1, 2, 3, 4, 5, 6]
const massiv1 = [7, 8, 9, 10, 11, 12]

if (massiv.length == massiv1.length) {
    const newMassiv = [...massiv, ...massiv1]
    console.log(newMassiv)
} else {
    console.log("Nizi nemaat istata dolgina")
}



//2
const array = [5, 15, 28, 1, 94, 15, 3, 23, 19, 45]
let max=0

for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
       max = array[i]  
    }
}
console.log(max)

let min=array[0];
for (i = 1; i < array.length; i++) {
    if (array[i] < min) {
       min = array[i]  
    }
}
console.log(min)



//3
const niza = [1, 2, 3, 4, 2, 5, 6, 2, 7, 8, 9, 2]
let duplikat
const nizaSoDuplikati = []

for (let i = 0; i < niza.length; i++) {
    for (let j = 0; j < niza.length; j++) {
        if (i !== j) {
            if (niza[i] === niza[j]) {
                duplikat = true;
                nizaSoDuplikati.push(niza[j])
                break;
            }
        }
        if (duplikat = false) {
            break;
        }
    }
}
if (!duplikat) {
    console.log("Lista so broevi nema duplikati..")
} else {
    console.log("Lista so broevi ima duplikati.")
    console.log(nizaSoDuplikati)
}
 





