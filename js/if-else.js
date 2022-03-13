function checkList() {
    let salary1 = 50000;
    let salary2 = '60000';
    let salary3 = 50000;
    if (salary1 === salary2) {
        console.log('Both person not get equal salary')
    }
    else if(salary1===salary3) {
        console.log('Both person got equal salary')
    }
}
checkList()


//if else condition problem

const totalNumber = (n1, n2, n3, n4, n5) => {
    const sumOfAllNumbers = n1 + n2 + n3 + n4 + n5;
    const average = sumOfAllNumbers / 5;
    if (average === 60) {
        console.log('you got gpa 3.50');
    }
    else if (average === 70) {
        console.log('you got gpa 4.00');
    }
    else if (average >= 80) {
        console.log('you got gpa 5.00');
    }
    else if(average<60) {
        console.log('you are not promoted to next class');
    }
    return average;
}

const numbers = totalNumber(30,88,44,46,42);
console.log('Your Average Mark',numbers);


 