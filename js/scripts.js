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

Pizza.prototype.display = function() {
  const orderKeys = Object.keys(myOrder);
  let orderString = ""; 
    orderKeys.forEach(function(key){
      orderString = orderString.concat(key + ": " + myOrder[key]);
    });
}



//User Interface

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const toppings = $('input[name="topping"]:checked')
    const crust = $("#crust").val();
    let myOrder = new Pizza(size, toppings, crust)
    let displayOrder = Pizza.display; 
    $(".my-order").text("Is this working");
    $("#order").hide();
    $("#deliver").show();
    console.log(displayOrder);
    console.log(crust);
    console.log(toppings);
    console.log(size);
  });
})

