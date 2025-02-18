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


function openCategory(category: string) {
    
    let items: Item[] = [];
    let displayAnimals: boolean = false;

    switch (category) {
        case "food":
            items = food;
            break;
        case "toys":
            items = toys;
            break;
        case "health care":
            items = healthCare;
            break;
        case "general":
            items = general;
            break;
        case "animals":
            displayAnimals = true;
            break;
        default:
            items = [];
            break;
    }

    const categoryItems = document.getElementById("category-items");
    categoryItems.innerHTML = '';

    if (displayAnimals) {
        animals.forEach((animal) => {
            const animalDiv = document.createElement("div");
            animalDiv.classList.add("item");

            const animalName = document.createElement("h4");
            animalName.textContent = `${animal.name} - ${animal.type}`;

            const animalAge = document.createElement("p");
            animalAge.textContent = `Age: ${animal.age} years`;

            const animalDescription = document.createElement("p");
            animalDescription.textContent = animal.description || "No description available.";

            const buyButton = document.createElement("button");
            buyButton.textContent = "Buy";
            buyButton.onclick = (event) => addAnimalToCart(event, animal);

            animalDiv.appendChild(animalName);
            animalDiv.appendChild(animalAge);
            animalDiv.appendChild(animalDescription);
            animalDiv.appendChild(buyButton);

            categoryItems.appendChild(animalDiv);
        });
    } else {
        items.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const itemName = document.createElement("h4");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `The price is: $${item.price}`;

            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description || "No description available.";

            const buyButton = document.createElement("button");
            buyButton.textContent = "Buy";
            buyButton.onclick = (event) => addItemToCart(event, item);

            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);
            itemDiv.appendChild(itemDescription);
            itemDiv.appendChild(buyButton);

            categoryItems.appendChild(itemDiv);
        });
    }
}

function addItemToCart(event: Event, item: Item) {
    event.preventDefault();
    console.log(`${item.name} Added to cart:`);
}

function addAnimalToCart(event: Event, animal: Animal) {
    event.preventDefault();
    console.log(`The ${animal.type} ${animal.name} added to cart:`);
}

function closeCategory() {
    const closingCategory = document.getElementById("category-items");
    closingCategory.innerHTML = '';
}    
