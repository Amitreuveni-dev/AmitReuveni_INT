
class Animal {
    type: string;
    name: string;
    age: number;
    stock: number;
    description?: string;

    constructor(type: string, name: string, age: number, stock: number, description?: string) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.stock = stock;
        this.description = description;
    }
};

class Item {
    id: string;
    name: string;
    category: Category;
    price: number;
    stock: number;
    description?: string;

    constructor(id: string, name: string, category: Category, price: number, stock: number, description?: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }
};

class Wearhouse {
    item: string;
    quantity: number;

    constructor(item: string, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }
};

type Category = "Food" | "Toys" | "Health care" | "General";

let animals: Animal[] = [
    new Animal("Dog", "Simba", 3, 10, "A friendly and playful dog."),
    new Animal("Cat", "Messi", 2, 15, "A curious and independent cat."),
    new Animal("Rabbit", "Yosi", 1, 5, "A gentle and soft rabbit."),
    new Animal("Parrot", "chiko", 2, 7, "A proud and loud parrot.")
];

let food: Item[] = [
    new Item("1", "dog food", "Food", 15, 100),
    new Item("2", "cat food", "Food", 15, 100),
    new Item("3", "rabbit food", "Food", 30, 100),
    new Item("4", "parrot food", "Food", 10, 100)
];

let toys: Item[] = [
    new Item("1", "dog toys", "Toys", 40, 100),
    new Item("2", "cat toys", "Toys", 40, 100),
    new Item("3", "rabbit toys", "Toys", 40, 100),
    new Item("4", "parrot toys", "Toys", 40, 100)
];

let healthCare: Item[] = [
    new Item("1", "dog health care", "Health care", 100, 100),
    new Item("2", "cat health care", "Health care", 100, 100),
    new Item("3", "rabbit health care", "Health care", 100, 100),
    new Item("4", "parrot health care", "Health care", 100, 100)
];

let general: Item[] = [
    new Item("1", "dog general stuff", "General", 35, 100),
    new Item("2", "cat general stuff", "General", 35, 100),
    new Item("3", "rabbit general stuff", "General", 35, 100),
    new Item("4", "parrot general stuff", "General", 35, 100)
];

console.log(animals);
console.log(food);