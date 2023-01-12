/* WEEK 5 CODING ASSIGNMENT
Coding Steps: 
Create a menu app. 

Requirements:
1. Use at least one array.
2. Use at least two classes.
3. Your menu should have the options to create, view, and delete elements.
*/

class Drink {
    constructor (size, flavor, toppings) {
        this.size = size;
        this.flavor = flavor;
        this.toppings = toppings;
    }

    describe() {
        return `${this.size} ${this.flavor} with ${this.toppings}`;
    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.drinks = []; //drinks array
    }
}

class Menu {
    constructor() {
        this.orders = []; //orders array
        this.selectedOrder = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrders();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create order
            2) view order
            3) delete order
            4) display all orders
        `);
    }

    showOrderMenuOptions(orderInfo) { //accessed by selecting view order 
        return prompt(`
            0) back
            1) create drink
            2) delete drink
            ----------------------------
            ${orderInfo}
        `);
    }

    displayOrders(){
        let orderString = '';
        for (let i = 0; i < this.orders.length; i++) {
            orderString += i + ') ' + this.orders[i].name + '\n';
        }
        alert(orderString);
    }

    createOrder() {
        let name = prompt('Enter name for new order: ');
        this.orders.push(new Order(name)); //push to orders array
    }

    viewOrder() {
        let index = prompt('Enter the index of the order you wish to view:');
        if (index > -1 && index < this.orders.length) {
            this.selectedOrder = this.orders[index];
            let description = 'Order Name: ' + this.selectedOrder.name + '\n'; //order name

            for (let i = 0; i < this.selectedOrder.drinks.length; i++) { //drink
                description += i + ') ' + ' - ' +
                this.selectedOrder.drinks[i].size + " " +
                this.selectedOrder.drinks[i].flavor + " " + "with" + " " +
                this.selectedOrder.drinks[i].toppings + '\n';
            }

            let selection = this.showOrderMenuOptions(description); //view order menu options
            switch (selection) {
                case '1':
                    this.createDrink();
                    break;
                case '2':
                    this.deleteDrink();
            }
         }
     }

    deleteOrder() { //from main menu options
        let index = prompt('Enter the index of the order you wish to delete');
        if (index > -1 && index < this.orders.length) {
            this.orders.splice(index, 1);
        }
    }

    createDrink() { //from view order menu options
        let size = prompt(`Enter size of drink:
            -small
            -medium
            -large
            `);

        let flavor = prompt(`Enter flavor of drink:
            -coffee
            -fruit tea
            -milk tea
            `);

        let toppings = prompt(`Enter toppings for drink:
            -boba
            -jelly
            -whipped cream
            -nothing
            `);

        this.selectedOrder.drinks.push(new Drink(size,flavor,toppings)); //push to drinks array
    }

    deleteDrink() {
        let index = prompt ('Enter the index of the drink you wish to delete:');
        if (index > -1 && index < this.selectedOrder.drinks.length) {
            this.selectedOrder.drinks.splice(index, 1);
        }
    }
}

let menu = new Menu(); //start up the menu app in my browser
menu.start();
    

