const a=1, b=2;



if (a < b) {
    console.log("А меньше В")
}
console.log("Продолжаю...")
const uslov=a < b;
if (uslov) {
    console.log("А меньше В")
}
if (!uslov) {
    console.log("А не меньше В")
}
if (uslov) {
    console.log("А меньше В")
} else {
    console.log("А не меньше В")
}

const broj1=10, broj2=5;
if ( broj1>broj2) {
    console.log(broj1 +" e pogolem od" + broj2)
} else if (broj1<broj2) {
    console.log(broj1 +" e pomal od" + broj2)
} else {
    console.log(broj1 +" raven" + broj2)
}

console.log("Aleksandar" === "Anna" ? "Names are the same" : "Names are not the same")
const names = "Aleksandar" === "Anna" ? console.log("Names are the same") : console.log("Names are not the same");

const water=100;
const coffee=50;
if (water<20 || coffee< 10) {
    console.log("Error")
}
if ((water >20) && (coffee >10)) {
    console.log("Let's make some coffee")
}



const animal="Parrot"

switch (animal) {
    case "Parrot": {
        console.log("This animal can sing!")
        break
    }
    case "Dog": {
        console.log("This animal can bark!")
        break
    }
    case "Cat": {
        console.log("This animal can purr!")
        break
    }
    default: {
        console.log("Unknown animal!")
    }

}


