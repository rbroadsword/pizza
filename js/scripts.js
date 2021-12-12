//Business Logic

function Pizza(size, toppings, crust, totalCost) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust; 
  this.totalCost = totalCost;
}


Pizza.prototype.price = function() { 
if (this.size === "small") {
  this.totalCost = "10";
} else if (this.size === "medium") {
  this.totalCost = "15"; 
} else if (this.size === "large") {
  this.totalCost = "20";
}
return this.totalCost;
}



//User Interface

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("input#size").val();
    const toppings = $('input[type="checkbox"]:checked')
    const crust = $("input#crust").val();
    let myOrder = new Pizza(size, toppings, crust)
    $("#order").hide();
    $('#deliver').show();
    
    const orderKeys = Object.keys(myOrder);
    let orderString = ""; 
    orderKeys.forEach(function(key){
      orderString = orderString.concat(key + ": " + myOrder[key]);
    });
    $('#my-order').text(orderString);
    console.log(myOrder.toppings); 
  });
})

