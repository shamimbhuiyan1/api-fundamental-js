
// templete String 

const company = {
    name: 'Walton Hightech Park',
    address: 'Badda',
    projects: ['walton mobile', 'refigarator', 'ac', 'home applince']
};
const name =`Name of company is ${company.name} .Their location is ${company.address} And they have following projects: ${company.projects[0]},${company.projects[1]},${company.projects[2]},${company.projects[3]}. ` 
console.log(name);

// arrow function

const singleNumber = () => 65;
// console.log(singleNumber);

const addNumbers = number => number + 65;
console.log(addNumbers(65));

const multipleNumbers = (n1, n2, n3, n4, n5) => {
    // let sum = n1 + n2;
    // let division = sum / n3;
    let subtraction = (n1 + n2 + n3 + n4 + n5) - (n3 + n5);
    if (subtraction % 2 === 0) {
        console.log('your number is even');
    }
    else if(subtraction%2 !==0) {
        console.log('your number is odd');      
    }

    
    return  subtraction;
}
const allNumbers = multipleNumbers(51, 64, 78, 20, 36)
console.log(allNumbers);



const numbers = [45, 65, 12, 45, 67, 88];
numbers.push(54)

console.log(numbers);
console.log(...numbers);