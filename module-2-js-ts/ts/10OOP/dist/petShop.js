var Animal = /** @class */ (function () {
    function Animal(type, name, age, stock, description) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.stock = stock;
        this.description = description;
    }
    return Animal;
}());
;
var Item = /** @class */ (function () {
    function Item(id, name, category, price, stock, description) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }
    return Item;
}());
;
var Wearhouse = /** @class */ (function () {
    function Wearhouse(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
    return Wearhouse;
}());
;
var animals = [
    new Animal("Dog", "Simba", 3, 10, "A friendly and playful dog."),
    new Animal("Cat", "Messi", 2, 15, "A curious and independent cat."),
    new Animal("Rabbit", "Yosi", 1, 5, "A gentle and soft rabbit."),
    new Animal("Parrot", "chiko", 2, 7, "A proud and loud parrot.")
];
var food = [
    new Item("1", "dog food", "Food", 15, 100),
    new Item("2", "cat food", "Food", 15, 100),
    new Item("3", "rabbit food", "Food", 30, 100),
    new Item("4", "parrot food", "Food", 10, 100)
];
var toys = [
    new Item("1", "dog toys", "Toys", 40, 100),
    new Item("2", "cat toys", "Toys", 40, 100),
    new Item("3", "rabbit toys", "Toys", 40, 100),
    new Item("4", "parrot toys", "Toys", 40, 100)
];
var healthCare = [
    new Item("1", "dog health care", "Health care", 100, 100),
    new Item("2", "cat health care", "Health care", 100, 100),
    new Item("3", "rabbit health care", "Health care", 100, 100),
    new Item("4", "parrot health care", "Health care", 100, 100)
];
var general = [
    new Item("1", "dog general stuff", "General", 35, 100),
    new Item("2", "cat general stuff", "General", 35, 100),
    new Item("3", "rabbit general stuff", "General", 35, 100),
    new Item("4", "parrot general stuff", "General", 35, 100)
];
console.log(animals);
console.log(food);
