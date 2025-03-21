type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};

function menu() {
    const mainMenu = prompt("Please choose an option\n" +
        "1. Add a person.\n" +
        "2. Remove a person.\n" +
        "3. Take a look at the highest sallary.\n" +
        "4. Take a look at the employee list.\n" +
        "5. Press cancel to exit.");

    switch (mainMenu) {
        case "1":
        case "Add":
        case "Add a person":
        case "add":
        case "add a person":
            getEmployeeData();
            return menu();

        case "2":
        case "Remove":
        case "Remove a person":
        case "remove":
        case "remove a person":
            removeEmployee();
            return menu();

        case "3":
        case "sallary":
        case "highest sallary":
            highestSallery();
            return menu();

        case "4":
        case "list":
        case "employee list":
            employeeList();
            return menu();

        case "5":
        case "exit":
            alert(`You chose option 5: exiting.`);
            break;

        case null:
            alert(`Goodbye`)
            break;

        default:
            alert(`Invalid option. Please try again`);
            return menu();
    }
}

let employees: Employee[] = [];

function getEmployeeData() {
    const name = prompt("Please enter your name");
    const age = Number(prompt("Please enter your age"));
    const department = prompt("Please enter your department");
    const sallary = Number(prompt("Please enter your sallary"));
    if (name && age && department && sallary) {
        employees.push({
            name,
            age,
            department,
            sallary
        });
    } else {
        alert(`Invalid details, please try again`)
        getEmployeeData();
    }
}

function removeEmployee() {
    let userChoice = prompt("Please enter the name of the person you would like to remove from the list?");
    if (userChoice === null) {
        alert("you haven't chosen a person.\nBack to main menu");
        return menu();
    }
    const Length = employees.length;
    employees = employees.filter(employee => employee.name !== userChoice);
    if (employees.length === Length) {
        alert("Employee not found");
    } else {
        alert(`You have removed ${userChoice} from the list`);
    }
}

function highestSallery() {
    if (employees.length === 0) {
        alert("No employees to compare.");
        return;
    }
    let highest = employees[0];
    for (let i = 1; i < employees.length; i++) {
        if (employees[i].sallary > highest.sallary) {
            highest = employees[i];
        }
    }
    alert(`The employee with the highest salary is ${highest.name}.\nwith a salary of ${highest.sallary}.`);
}

function employeeList() {
    if (employees.length === 0) {
        alert("No employees in the list.");
    } else {
        const employeeNames = employees.map(employee => `Name: ${employee.name}, Age: ${employee.age}, department: ${employee.department}, sallary: ${employee.sallary}`);
        alert("Employye list:\n" + employeeNames.join("\n"));
    }
}

menu();