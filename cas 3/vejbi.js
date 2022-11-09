const broj=5;

if (broj%2===0) {
    console.log ("Brojot e paren")
} else if (broj%2===1) {
    console.log ("Brojot ne e paren")
} else if (broj===0) {
    console.log ("Brojot e nula")
}

const vozrast=19;
if (vozrast>=21) {
    console.log("Covekot moje da pie alkohol, vozi avtomobil i glasa na izbori")
} else if (vozrast>=18) {
    console.log("Covekot moje da vozi avtomobil i glasa na izbori")
} else if (vozrast>=16) {
    console.log("Covekot moje da glasa na izbori")
} else if (vozrast<16) {
    console.log("Covekot treba da rasti")
}

const time=9;
if (0<time && time<=12 ) {
    console.log("Dobro  utro")
} else if (12<time && time<=18) {
    console.log("Dobar den")
} else if (18<time && time<=24) {
    console.log("Dobra vecher")
} else if (time>25) {
    console.log("A day has 24 hours")
}

const month=2;
const year=2024;
if (month==1 || month==3 ||  month==5 || month==7 || month==8 || month==10 || month==12) {
    console.log("This month has 31 days")
} else if (month==4 || month==6 ||  month==9 || month==11) {
    console.log("This month has 30 days")
} else if (month==2 && year%4===0) {
    console.log("This month has 29 days")
} else if (month==2) {
    console.log("This month has 28 days")
} else if (month>12) {
    console.log("This month doesn't exist")
}