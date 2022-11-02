// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
var o= 0

// Exercise 1
function buy(id) {
    var i;
    o++;
    for (let index = 0; index < products.length; index++) {
        if(id == products[index].id){
            i = index;
        }
    }
    const itemsadded = document.getElementById("count_product");
    itemsadded.innerText = o;
    cartList.push(products[i]);
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
  
  cartList = [];
  cart=[];
  o=0;
  const itemsadded = document.getElementById("count_product");
  itemsadded.innerText = o;
  const table = document.getElementById('cart_list');
  table.innerHTML = "Add something to cart";
  const t_price = document.getElementById('total_price');
  t_price.innerText = "0";

}

// Exercise 3
function calculateTotal() {
    let result=0,i=0;
    while(i < cart.length){
        result += cart[i].subtotalWithDiscount;
        i++;
    }
    return(result);
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function generateCart() {
    if(cart[0] != undefined){
        cart = [];
    }
    const checkOccurrence = (array, element) => {
        let i=0,counter = 0,qty=0;
        console.log("array length: "+ array.length);
        while (i < array.length ) {
            if (array[i].name == element) {
                console.log("consegui una referencia")
                counter++;
                qty += 1;
            }
            i++;
        };
        console.log("esta es la cantidad que logré identificar de "+element+": " + qty +" y estos son los valore de I y de Counter respectivamente "+i+"/"+counter);
        return(qty);
    };

   let coqt = checkOccurrence(cartList,'cooking oil');
   let pqt = checkOccurrence(cartList,'Pasta');
   let icmqt = checkOccurrence(cartList,'Instant cupcake mixture');
   let aioqt = checkOccurrence(cartList,'All-in-one');
   let zmqt = checkOccurrence(cartList,'Zero Make-up Kit');
   let ltqt = checkOccurrence(cartList,'Lip Tints');
   let ldqt = checkOccurrence(cartList,'Lawn Dress');
   let lccqt = checkOccurrence(cartList,'Lawn-Chiffon Combo');
   let tqt = checkOccurrence(cartList,'Toddler Frock');

   if (coqt > 0) {
    let cok = {
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        cuantidad: coqt,
        subtotal: 30,
        subtotalWithDiscount: 30
      }
    cart.push(cok);
   }
   if (pqt > 0) {
   let cok1 = {
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
    cuantidad: pqt,
    subtotal: 30,
    subtotalWithDiscount: 30
}
    cart.push(cok1);
   }
   if (icmqt > 0) {
    let cok2 = {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        cuantidad: icmqt,
        subtotal: 30,
        subtotalWithDiscount: 30
    }
    cart.push(cok2);
   }
   if (aioqt > 0) {
    let cok3 = {
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        cuantidad: aioqt,
        subtotal: 30,
        subtotalWithDiscount: 30
    }
    cart.push(cok3);
   }
   if (zmqt > 0) {
    let cok4 = {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        cuantidad: zmqt,
        subtotal: 30,
        subtotalWithDiscount: 30
}
    cart.push(cok4);
   }
   if (ltqt > 0) {
    let cok5678 = {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        cuantidad: ltqt,
        subtotal: 30,
        subtotalWithDiscount: 30
    }
    cart.push(cok5678);
   }
   if (ldqt > 0) {
   let cok678 = 
   {
       name: 'Lawn Dress',
       price: 15,
       type: 'clothes',
       cuantidad: ldqt,
       subtotal: 30,
       subtotalWithDiscount: 30
   }
    cart.push(cok678);
   }
   if (lccqt > 0) {
    let cok78 = 
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        cuantidad: lccqt,
        subtotal: 30,
        subtotalWithDiscount: 30
    }
    cart.push(cok78);
   }
   if (tqt > 0) {
    let cok8 = 
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        cuantidad: tqt,
        subtotal: 30,
        subtotalWithDiscount: 30
    }
    cart.push(cok8);
   }
   applyPromotionsCart();

    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 5
function applyPromotionsCart() {
    const tod= (element) =>{
            element.subtotal = element.price*element.cuantidad;
        if (element.cuantidad >= 3) {
            element.subtotalWithDiscount = (element.subtotal * 7) / 10;
        }
        else if (element.cuantidad >= 5) {
            element.subtotalWithDiscount = (element.subtotal * 2 ) / 3;
        }
        else{
            element.subtotalWithDiscount = element.subtotal;
        }
    }
    cart.forEach(element => tod(element));
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    const createelement = (element) => {
        const table = document.getElementById('cart_list');
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var nametag = new String(element.name).bold();
        var pricetag = document.createTextNode("$"+element.price);
        var qtytag = document.createTextNode(element.cuantidad);
        var totaltag = document.createTextNode("$"+element.subtotalWithDiscount);
        cell1.innerHTML=nametag;
        cell2.appendChild(pricetag);
        cell3.appendChild(qtytag);
        cell4.appendChild(totaltag);
    }
    cart.forEach(element => createelement(element));
    const t_price = document.getElementById('total_price');
    res = calculateTotal();
    t_price.innerText = res;
    console.log(cart);
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
    generateCart();
    const table = document.getElementById('cart_list');
    table.innerHTML = "Add something to cart";
	printCart();
}