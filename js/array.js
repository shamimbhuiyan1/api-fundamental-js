// array problems

 const array = ['shamim', 'karim', 'nazrul', 'rasel', 'ayman'];
let length = array.length;
let value = array.indexOf('ayman')
array.push('mahin')
const index=array.includes(' ')
let deletevalue = array.splice(2, 4);
let keepvalue = array.slice(1, 3);
array.unshift('lakat')
console.log(length);
console.log(value);
console.log(array);
console.log(deletevalue);
console.log(keepvalue);
console.log(index);

let text = "Hello World, welcome to the universe.";
let result = text.includes("World");
console.log(result);




// array of obejects 
const products = [
    { name: 'iphone', price: 57000, brand: 'lenevo', color: 'gold' },
    { name: 'laptop', price: 87000, brand: 'hp', color: 'silver' },
    { name: 'watch', price: 7000, brand: 'apple watch', color: 'white' },
    { name: 'camera', price: 42000, brand: 'canon', color: 'black' },
    {name:'sunglass',price:2000,brand:'RKS',color:'gray'}
]



const iphone = products[0].price;
console.log(iphone)


// using of map 

const brandNames = products.map(product => product.brand)
console.log(brandNames);

const productPrice = products.map(prices => prices.price)
console.log(productPrice);

// foreach 

products.forEach(product => console.log(product.name))
products.forEach(product => console.log(product.color))

const numbers = [45, 68, 254, 78, 6, 4]

const doubleIt = number => number * 2;
const values = numbers.map(doubleIt);
console.log(values);



// using of filter 
const allPrices = products.filter(pricea => (pricea.price)<50000)
console.log(allPrices);



const footballClub = {
    club: 'Real Madrid',
    maneger: 'Morinho',
    players:{name:'cabani',}
}
const names = footballClub.players.name;
console.log(names);



const manyNumbers = [45, 64, 78, 64]
const doublenumbers = manyNumbers.map(num => num * 2);
console.log(doublenumbers);









const peoples = [
    { name: 'lakat', age: 26, occupation: 'student' },
    { name: 'shamim', age: 25, occupation: 'doctor' },
    { name: 'nazir', age: 28, occupation: 'student' },
    { name: 'rahim', age: 25, occupation: 'master' },
    {name:'samir',age:27,occupation:'teacher'}
]

const peopleNames = peoples.filter(age =>  (age.age > 26) 
    
)
console.log(peopleNames);




const productList = {
    ceo: 'karim', company: 'walton hightech park', salary: 250000 ,
    admin: 'rarim',company: ['walton refigarator', 'walton hightech park','walton laptop'], salary: 200000 
}
console.log(productList);
const companys = productList.company[0];
console.log(companys);

const companyList = [
   { ceo: 'karim', company: 'walton hightech park', salary: 250000 },
   { admin: 'rarim', company: 'walton refigarator', salary: 200000 },
   { ceo: 'narim', company: 'walton mobile', salary: 350000 },
   { ceo: 'arim', company: 'walton laptop', salary: 220000 },
   { ceo: 'kim', company:'walton accessiories',salary:250000}
]
const mapCompany = companyList.map(companyname =>companyname.ceo)
console.log(mapCompany);
const foreEachCompany = companyList.forEach(company => console.log(company.company))



const filterCompany = companyList.filter(salary => salary.salary > 250000)
console.log(filterCompany);
const allNumbers = [45, 67, 214, 78]
const num=JSON.stringify(allNumbers)
const Number = JSON.parse(num)
console.log(Number);
const students = { name: 'karim', id: 2, job: 'developer' };
const stringifies = JSON.stringify(students)
const student = JSON.parse(stringifies)
console.log(stringifies);
console.log(student);
