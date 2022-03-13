// for and while  loop

let x = [42, 54, 15, 67, 2];
let text = '';
for (let i = 0; i < x.length; i++){
    text =text+ i;
}
console.log(text);

// using all statement inside the for loop 
let str = [];
for (i = 0; i < 9; i++){
    str =str+ i;
    console.log(i)
}
console.log(str);



for (let i = 0;; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
 }


const person = { fname: 'shamim', lname: 'bhuiyan', age: 26 }
let content = '';
for (let x in person) {
    content = content + ' ' +person[x]+ ' ';
}
console.log(content);