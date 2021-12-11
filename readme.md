TESTS:

Describe: Pizza()

Test: "It should return a Pizza object with three properties for size, toppings, and crust type"
Code: const myPizza = new Pizza("small", ["peppers", "olives", "onions"], "thin");
Expected Output: Pizza {size: "medium", toppings: ["peppers", "olives", "onions"], crust: "thin"}

Describe: price()

Test: "When user selects pizza, it will calculate the cost" 
Code: const myPizza.price(); 
Expected Output: "15"