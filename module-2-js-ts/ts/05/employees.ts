type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};

function menu() {
    const mainMenu = prompt("Welcome plaese chose an option\n1.Add a person.\n2.Remove a person.\n3.Take a look on the salary.\n4.See statistics.\n5.Press cancel to exit the menu.");

    switch (mainMenu){
        case 1:
        case"Add":
        case"person":
        getEmployeeData;
        break;

    }
}

const employees: Employee[] = [];

function getEmployeeData() {

    const name = prompt("Please enter your name");
    const age = Number(prompt("Please enter your age"));
    const department = prompt("Please enter your department");
    const sallary = Number(prompt("Please enter your sallary"));

    if (name && department && (age) && (sallary)) {

        employees.push({
            name,
            age,
            department,
            sallary
        });
    } else {
        alert("Invalid details, please try again")
    }

}

getEmployeeData();
// let employeeWithMaxSallary = employees[0];


// for (const employee of employees) {
//     if (employee.sallary > employeeWithMaxSallary.sallary) {
//         employeeWithMaxSallary = employee
//     }
// }

// alert(`The employee with the highest sallary is: ${employeeWithMaxSallary.name}`);

// let employeeWithMinSallary = employees[0];

// for (const employee of employees) {
//     if (employee.sallary < employeeWithMinSallary.sallary) {
//         employeeWithMinSallary = employee
//     }
// }

// alert(`The employee with the lowest sallary is: ${employeeWithMinSallary.name}`);

// let sallariesSum = 0;

// for (const employee of employees) {
//     sallariesSum += employee.sallary;
// }

// alert(`The average sallary is ${sallariesSum / employees.length}`);
