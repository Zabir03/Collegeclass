
let inventory = [];

function addItem(name, quantity, price) {
    const item = {
        name: name,
        quantity: quantity,
        price: price,
        getTotalValue() {
            return this.quantity * this.price;
        }
    };
    inventory.push(item);
    console.log(`${name} has been added to the inventory.`);
}


function updateItem(name, newQuantity, newPrice) {
    const item = inventory.find(item => item.name === name);
    if (item) {
        if (newQuantity !== undefined) {
            item.quantity = newQuantity;
        }
        if (newPrice !== undefined) {
            item.price = newPrice;
        }
        console.log(`${name} has been updated.`);
    } else {
        console.log(`Item ${name} not found in the inventory.`);
    }
}


function deleteItem(name) {
    const index = inventory.findIndex(item => item.name === name);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`${name} has been deleted from the inventory.`);
    } else {
        console.log(`Item ${name} not found in the inventory.`);
    }
}

function displayInventory() {
    if (inventory.length === 0) {
        console.log("Inventory is empty.");
        return;
    }
    console.log("Current Inventory:");
    inventory.forEach(item => {
        console.log(`Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}, Total Value: $${item.getTotalValue()}`);
    });
}



addItem("Laptop", 10, 1000);
addItem("Phone", 20, 500);
addItem("Tablet", 15, 300);
displayInventory();

updateItem("Phone", 25, 550);
displayInventory();

deleteItem("Tablet");
displayInventory();
