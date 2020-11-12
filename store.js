
var shopper = {
    name: "Sidder Sue",
    age: 44,
    member: true,
    fullName: function() {
        return this.name
    },
};

var cart = [];
var Item = function(name, price, count) {
  this.name = name
  this.price = price
  this.count = count
};

function addToCart(name, price, count) {
  var item = new Item(name,price,count) ;
  cart.push(item);
}
addToCart("Apple", 1.00, 1);
addToCart("peas", .98, 3);
addToCart("carrots", .50, 3);
addToCart("corn", 1.15, 5);
addToCart("candy", .75, 10);

console.log(shopper)
console.log(cart)
    



