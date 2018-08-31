var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var price =  Math.floor(Math.random() * 100)
 var add = { itemName: item, itemPrice: price }
 cart.push(add)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
     return "Your shopping cart is empty."
        }
    else if (cart.length == 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if (cart.length == 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
      else {
        var return_string = "In your cart, you have" 
        var newarray = [];
     for (let i = 0; i < cart.length-1; i++) {
      var string = ` ${cart[i].itemName} at $${cart[i].itemPrice}`
       /*var string = cart[i].itemName + " at " + $cart[i].itemPrice + ", "*/
       newarray.push(string)
       //cart.length-1 + " and "
<<<<<<< HEAD
}
return return_string + newarray + ", and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + "."
}
=======
>>>>>>> fab2dddb1102526be49d82f7bff170534df48c5a
}
/*return return_string + newarray + ", and " + cart[cart.length-1].itemName + " at " + cart[cart.length-1].itemPrice + "."
}*/


function total() {
  // write your code here
<<<<<<< HEAD
    var t = 0;
for (let i = 0; i < cart.length; i++) {
  t += cart[i].itemPrice
}
return t
=======
    var totalarray = [];
for (let i = 0; i < cart.length; i++) {
  totalarray.push(price[i])
}
return totalarray
}
>>>>>>> fab2dddb1102526be49d82f7bff170534df48c5a
}



function removeFromCart(item) {
  // write your code here
<<<<<<< HEAD
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item){
      cart.splice(i,1)
      return cart
    }
    }

    return "That item is not in your cart."
=======
  if (cart === item) {
  delete cart.item;
  }
  else{
    return "That item is not in your cart."
  }
>>>>>>> fab2dddb1102526be49d82f7bff170534df48c5a
}

function placeOrder(cardNumber) {
  // write your code here
<<<<<<< HEAD
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  
    var newcart = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return newcart
=======
  if (cardNumber === 83296759){
    //empty cart
    var cart = {};
    return `"Your total cost is" ${totalarray} ", which will be charged to the card 83296759."`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
>>>>>>> fab2dddb1102526be49d82f7bff170534df48c5a
}
