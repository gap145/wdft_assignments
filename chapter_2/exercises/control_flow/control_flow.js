
// starting point to be fixed up
// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}

//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it
var menu = generateMenu();

// Lookup function
function selectMenuItem(item) {
    // If item is in the menu, return item
    var foundItem = 0;  // If not, return 0
    menu.forEach(function (element) {
        if (item === element.name) {
            foundItem = element;
        };
    });
    return foundItem;
};

// Cook Function Here:
function cook(orderTicket) {
    // For each menu item, add cook time to order item
    var cookingTime = 0;
    var rejected = false;  // if item not on menu, return false
    orderTicket.forEach(function (item) {
        var inMenu = selectMenuItem(item); 
        var itemPrepTime = inMenu.time;
        if (inMenu === 0) {
            console.log('Not on our menu, please try again.');
            rejected = true;
        } else {
            cookingTime += itemPrepTime;
        };
    });
    if (rejected === false) {
        // Console log how long it will take
        console.log('Cooking time is ' + cookingTime + ' seconds');
        // Delay the time in seconds setTimeout()
        // Call the serve function with the 3 items as arguments
        setTimeout(serve, cookingTime * 1000, orderTicket);  // Can pass arguments to serve on last argument of setTimeout
    };
};

// Order Function Here:
function order(main, side, drink) {
    // If less than 3 arguments, display error asking to modify order 
    if (arguments.length < 3) {
        console.log('Minimum order is 3 items')
    } else {
        // Convert arguments to array
        var orderTicket = Array.prototype.slice.call(arguments);
        // What was ordered
        console.log('You ordered, ' + orderTicket)
        // call cook function passing the 3 arguments as array
        cook(orderTicket);
    }
};

// Serve Function Here:
function serve(readyMeal) {
    // Loop through menu to add total cost of meal
    var totalPrice = 0;
    readyMeal.forEach(function (item) {
        var itemPrice = selectMenuItem(item).price;
        totalPrice += itemPrice;
    });
    // console log meal is ready to serve and tell total cost
    console.log('Your meal is ready and total price is ' + totalPrice + ' dollars');
};

// This is a test order. It should take 8 seconds and should cost $65.
order('Lobster', 'Wild Rice', 'Wine');
