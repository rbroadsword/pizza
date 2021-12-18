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
    const name = $("#first-name").val();
    const size = $("#size").val();
    const toppings = [];
    const crust = $("#crust").val();
    let myOrder = new Pizza(size, toppings, crust);
    let cost = myOrder.price();

    $("#order").hide();
    $("#name").text(name);
    $(".display-size").text(size);
    $(".display-toppings").text(toppings.join(" , "));
    $(".display-crust").text(crust);
    $(".display-price").text(cost);
    $("#deliver").show();
    console.log(cost); 
  });
  $(".clickable").click(function(){
    $("#deliver").hide();
    $("#order").show();
    location.reload(true);
  })
})

