/*Da se napise funkcija koja kako parametri prima dva stringovi - username i password. Funkcijata treba da proveri dali username ima samo mali bukvi i minimum 8 karakteri.
Funkcijata isto taka treba da proveri dali paswordot ima barem edna golema bukva, minimum 8 karakteri, barem eden broj i barem eden specijalen karakter (!, @, #, $, %, ^, &)

Dokolkusite uslovi se ispolneti, funkcijata treba da ispecati "Login successful"

Dokolku barem eden od uslovite NE e ispolnet, treba da se ispecati koj uslov ne e zadovolen (ne mora site, dovolno e eden). Primer: "Password must be at least 8 characters long"*/


function checkPassword(password) 
{ 
let pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
if(password.value.match(pass)) 
{ 
  console.log("Pasword e dobar")
//return true;
}
else
{ 
  console.log("Pasword treba da ima barem edna golema bukva, minimum 8 karakteri, barem eden broj i barem eden specijalen karakter")
//return false;
}
} 

function checkUsername(username) 
{ 
let pattern=  /^(?=.*\d)(?=.*[a-z])(?!.*\s).{8,}$/;
if(username.value.match(pattern)) 
{ 
  console.log("Ime e dobro")
//return true;
}
else
{ 
  console.log("Ime treba da ima samo mali bukvi i minimum 8 karakteri")
//return false;
}
} 

function isValidUsernamePassword (username, password) {
  checkUsername (username)
  checkPassword (password)
}

console.log(checkUsername('petrovski'))
console.log(checkPassword('1!Gasdfr'))

/*
function usernameIsValid(username) {
  if (username.length > 8) {
  return /^[a-z]+$/.test(username);
}
else {
  console.log("Ime treba da ima samo mali bukvi i minimum 8 karakteri")
}}

function passwordIsValid(password) {
  if (password.length > 8) {
  return /^[0-9a-zA-Z!@#$%^&]+$/.test(password);
}
else {
  console.log("Pasword treba da ima barem edna golema bukva, minimum 8 karakteri, barem eden broj i barem eden specijalen karakter")
}}

function isValidUsernamePassword (username, password) {
  usernameIsValid (username)
  passwordIsValid (password)
}

console.log(isValidUsernamePassword('petrovski', '1!Tasdfg'))
/*function checkPassword (username) {
   
    let maliBukvi = 'qwertyuiopasdfghjklzxcvbnm'
    let golemiBukvi = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
    let brojki = "0123456789"
    let specialniKarakteri = "!@#$%^&"
    let isMaliBukvi = false
    let isGolemiBukvi = false
    let isBrojki = false
    let isSpecialniKarakteri = false

    for (let i = 0; i < username.length; i++) {
      if (isMaliBukvi && maliBukvi.indexOf(username[i]) != -1) 
        isMaliBukvi = true;
        else {console.log("Username treba da ima samo mali bukvi i minimum 8 karakteri")}
      //else if (!isGolemiBukvi && golemiBukvi.indexOf(username[i]) != -1) isGolemiBukvi = true;
      //else if (!isBrojki && brojki.indexOf(username[i]) != -1) isBrojki = true;
      //else if (!isSpecialniKarakteri && specialniKarakteri.indexOf(username[i]) != -1) isSpecialniKarakteri = true;
    }


}
console.log(checkPassword('aspeolkh'))*/