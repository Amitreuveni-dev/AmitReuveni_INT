// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects
// API
const itemsStorageKey = "items";
const employeesStorageKey = "employees";
let items = JSON.parse(localStorage.getItem(itemsStorageKey)) ?? '[]';
let employees = JSON.parse(localStorage.getItem(employeesStorageKey)) ?? '[]';
let stock = [];
let inventory = [];
export function getItems() {
    return items.slice();
}
export function getItem(itemId) {
    const item = items.find((i) => i.id === itemId);
    return item ?? `Item with id "${itemId}" doesn't exist.`;
}
export function addItem(item) {
    if (items.some((i) => i.id === item.id)) {
        return `Id "${item.id}" already exists`;
    }
    items.push(item);
    localStorage.setItem(itemsStorageKey, JSON.stringify(items));
    return "Success";
}
export function editItem(item) {
    const itemToEdit = getItem(item.id);
    if (typeof itemToEdit === "string") {
        return itemToEdit;
    }
    itemToEdit.name = item.name;
    itemToEdit.description = item.description;
    itemToEdit.priceInAgorot = item.priceInAgorot;
    localStorage.setItem(itemsStorageKey, JSON.stringify(items));
    return "Success";
}
export function addEmployee(employee) {
    employees.push(employee);
    localStorage.setItem(employeesStorageKey, JSON.stringify(employees));
    return "Success";
}
export function addToStock(itemId, amount) {
    const stockItem = stock.find(s => s.itemId === itemId);
    if (stockItem) {
        stockItem.quantity += amount;
    }
    else {
        stock.push({ itemId, quantity: amount });
    }
    localStorage.setItem("stock", JSON.stringify(stock));
}
export function consume(itemId, quantity) {
    const stockItem = stock.find(s => s.itemId === itemId);
    if (stockItem && stockItem.quantity >= quantity) {
        stockItem.quantity -= quantity;
        localStorage.setItem("stock", JSON.stringify(stock));
        return "Success";
    }
    return "Not enough stock or item not found";
}
export function acquire(itemId, serial) {
    inventory.push({ itemId, serial });
    localStorage.setItem("inventory", JSON.stringify(inventory));
    return "Item acquired";
}
export function decomission(serial) {
    const index = inventory.findIndex(i => i.serial === serial);
    if (index > -1) {
        inventory.splice(index, 1);
        localStorage.setItem("inventory", JSON.stringify(inventory));
        return "Item decommissioned";
    }
    return "Serial number not found";
}
function getEmployeeData() {
    const name = prompt("Please enter your name");
    const age = prompt("Please enter your age");
    const department = prompt("Please enter your department");
    if (!name || !age || !department) {
        alert(`Invalid details, please try again`);
        return getEmployeeData();
    }
    employees.push({
        name,
        age: Number(age),
        department
    });
    localStorage.setItem(employeesStorageKey, JSON.stringify(employees));
}
