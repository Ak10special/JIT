// alert('............................................')

classJs = 'Js class started';
console.log(classJs);

// gettingIt = 34;
// console.log(gettingIt);

document.write('Debbie is a potential nuisance');
document.getElementById('david').innerHTML = 'Segun knows my classmate';
console.log(' .........................');

// vaariable declaration : var let const
var classJs = 'New Javascript Class';
console.log(classJs);

let gettingIt = 'We\'re getting better in JS';
console.log(gettingIt);
gettingIt = 34;
console.log(gettingIt);

const gotIt = 'we\'re doing well with JS';
console.log(gotIt);

document.getElementById('class').innerHTML = classJs;

document.getElementById('get').innerHTML =gettingIt;

document.getElementById('got').innerHTML = gotIt;

classJs  = 'Knowlege is power';
console.log(classJs);

gettingIt = 'Power is authorithy';
console.log(gettingIt);

// gotIt = 'Authority requires wisdom';
// console.log(gotIt)

// String
var str1 = 'We are starting data types';
var str2 = 'in JavaScript';

console.log(str1);
console.log(typeof(str1));
console.log(str2);
console.log((typeof(str2)));

// Merging  / concatenation of string
var strMerge = str1 + ' ' + str2;
console.log(strMerge);

var strConcat = str1.concat(' ', str2);
console.log(strConcat);

// Getting total nmbers of characters in a string
var strLength = str1.length;
console.log(strLength);

var strLength = str2.length;
console.log(strLength);

// Escaping character(\)
var str3 = "He was quoted 'Light brings about clarity'";
console.log(str3);

var str4 = 'He was quoted \'Light brings about clarity\'';
console.log(str4);

// Make all characters Capital Letters
var strCapital = str4.toUpperCase();
console.log(strCapital);

// Make all characters lower case letters
var strLower = str4.toLowerCase();
console.log(strLower);

// Get a single character
var str3SingleCharacters = str4[0];
console.log(str3SingleCharacters);

// Merging characters
var str3Mergered = str3[10] + str3[4] + str3[9] + str3[17] + str3[0] + str3[10];
console.log(str3Mergered);

// Convert str3Merged to lower case 
var str3MergedConv = str3Mergered.toLowerCase();
console.log(str3MergedConv);

var strClsWrk = str3[0].toUpperCase() + str3[1].toUpperCase() + ' ' + str3[3].toLowerCase() + str3[4].toLowerCase() + str3[5].toLowerCase() + ' ' + str3[7].toUpperCase() + str3[8].toUpperCase() + str3[9].toUpperCase() + str3[10].toUpperCase() + str3[11].toUpperCase() + str3[12].toUpperCase() + ' ' + str4[28].toLowerCase() + str4[29].toLowerCase() + str4[30].toLowerCase() + str4[31].toLowerCase() + str4[32].toLowerCase() + ' ' + str2[3].toUpperCase() + str2[4].toUpperCase() + str2[5].toUpperCase() + str2[6].toUpperCase() + str2[7].toUpperCase() + str2[8].toUpperCase() + str2[9].toUpperCase() + str2[10].toUpperCase() + str2[11].toUpperCase() + str2[12].toUpperCase() + ' ' + str1[16].toLowerCase() + str1[17].toLowerCase() + str1[18].toLowerCase() + str1[19].toLowerCase() + ' ' + str1[21].toUpperCase() + str1[22].toUpperCase() + str1[23].toUpperCase() + str1[24].toUpperCase() + str1[25].toUpperCase();
console.log(strClsWrk)

document.getElementById('str').innerHTML = strClsWrk

// Slice
let part = str4.slice(7, 13);
console.log(part);

let part1 = str4.slice(-12, -7);
console.log(part1);

// Subtracting
let part2 = str4.substring(7, 13);
console.log(part2);

// Substr
let part3 = str3.substr(7, 6);
console.log(part3);

// Repeat
let result = str2.repeat(2);
console.log(result);

// Replace
let newText = str1.replace("We", "They");
console.log(newText);

// Numbers
let x = 3.14;
console.log(x)
console.log(typeof(x))
let y = 3;
console.log(y)
console.log(typeof(y))

x = 10;
y = 20;
z = x + y;
console.log(z)
