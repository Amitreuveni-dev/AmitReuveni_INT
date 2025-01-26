function menu() {
    var mainMenu = prompt("Welcome plaese chose an option\n1.Add a person.\n2.Remove a person.\n3.Take a look on the salary.\n4.See statistics.\n5.Press cancel to exit the menu.");
    switch (mainMenu) {
        case 1:
        case "Add":
        case "person":
            getEmployeeData;
            break;
    }
}
var employees = [];
function getEmployeeData() {
    var name = prompt("Please enter your name");
    var age = Number(prompt("Please enter your age"));
    var department = prompt("Please enter your department");
    var sallary = Number(prompt("Please enter your sallary"));
    if (name && department && (age) && (sallary)) {
        employees.push({
            name: name,
            age: age,
            department: department,
            sallary: sallary
        });
    }
    else {
        alert("Invalid details, please try again");
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
