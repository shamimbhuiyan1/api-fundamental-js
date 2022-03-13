const names = ['shamim', 'nazrul', 'atawor', 'rasel', 'joynal']

const [x, y, z] = names;
console.log(x,y,z);


let person =null;
console.log(person ? person : "person is null");

const obj = {a:1};
console.log(Object.keys(obj).length===0);