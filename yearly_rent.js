const monthlyRent = 1375;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "Brian Holt";
console.log(myName);

const fname = "Jeremiah";
const lname = "Chicas";
const resp = "Good Mommy and Daddy!"

const fullname = `Hello ${fname} ${lname}! How are you?`;
const fullresp = `Me ${resp}! How are you?`;

console.log(fullname);
console.log(fullresp);

//Control Flow
const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

if (2 + 2 !== 4){
  console.log("Nice so we do know logic !");
} else {
  console.log("Some thing is not right?!");
}

const tempToday = 19;
if (tempToday <=35 ){
  console.log("It is Cold!");
} else {
  console.log("Not that bad");
}

const hrsOfsleep = 5;

if (hrsOfsleep == 8 ){
  console.log("Good hours to sleep");
} else if(hrsOfsleep >=12 ){
  console.log("You over slept");
} else {
  console.log("You might need to sleep better")
}

//Loops
let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty);

let age = 5;
while (age < 10) {
  console.log("You are under 10"); 
  age++;
  
}
console.log("Under " + age);

let f = 0;
for (let i = 0; i <= 10; i++) {
  f++;
}
console.log(f);


