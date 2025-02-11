"use strict";
// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects
var _a;
exports.__esModule = true;
exports.decomission = exports.acquire = exports.consume = exports.addToStock = exports.editItem = exports.addItem = exports.getItems = void 0;
// API
var itemsStorageKey = "items";
var items = (_a = JSON.parse(localStorage.getItem(itemsStorageKey))) !== null && _a !== void 0 ? _a : [];
var stock = [];
var inventory = [];
function getItems() {
    return items.slice();
}
exports.getItems = getItems;
function addItem(item) {
    if (items.some(function (i) { return i.id === item.id; })) {
        return "Id \"" + item.id + "\" already exists";
    }
    items.push(item);
    localStorage.setItem(itemsStorageKey, JSON.stringify(items));
    return "Success";
}
exports.addItem = addItem;
function editItem(item) { }
exports.editItem = editItem;
function addToStock(itemId, amount) { }
exports.addToStock = addToStock;
function consume(itemId, quantity) { }
exports.consume = consume;
function acquire(itemId, serial) { }
exports.acquire = acquire;
function decomission(serial) { }
exports.decomission = decomission;
var employees = [];
function getEmployeeData() {
    var name = prompt("Please enter your name");
    var age = prompt("Please enter your age");
    var department = prompt("Please enter your department");
    if (name && age && department) {
        employees.push({
            name: name,
            age: Number(age),
            department: department
        });
    }
    else {
        alert("Invalid details, please try again");
        getEmployeeData();
    }
}
