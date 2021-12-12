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
    $("#order").hide();
    $('#deliver').show();
  });
})

