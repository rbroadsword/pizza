# Pizza!

#### Order a pizza!

#### By: Ryan Broadsword

## Technologies Used 

* HTML
* CSS 
* Bootstrap
* jQuery 
* java script

## Description 

* User fills out form, chooses size, topppings, and crust. Then your order will appear with the price of the pizza. 

## Setup/Installation Requirements

* Clone this repository to your desktop. 
* Navigate to the directory. 
* Open index.html
* Fill out the form and click submit.

## Known Bugs 

* The users order will not display on page.
* The looping through the created object is not displaying. 


## License 

* Not currently licensed

## Contact Information 

* Ryan Broadsword - rbroadsword@gmail.com


TESTS:

Describe: Pizza()

Test: "It should return a Pizza object with three properties for size, toppings, and crust type"
Code: const myPizza = new Pizza("small", ["peppers", "olives", "onions"], "thin");
Expected Output: Pizza {size: "medium", toppings: ["peppers", "olives", "onions"], crust: "thin"}

Describe: price()

Test: "When user selects pizza, it will calculate the cost" 
Code: const myPizza.price(); 
Expected Output: "15"