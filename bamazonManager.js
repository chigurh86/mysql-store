var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Thenewone95!",
  database: "Bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});
var starter = function(){
  inquirer.prompt([{
    name: "options",
    type: 'rawlist',
    message: "What would you like to do?",
    choices: ["View Products for Sale","View Low Inventory", "Add to Inventory", "Add New Product"]
  }]).then(function(answer){
    switch (answer.options) {
      case "View Products for Sale":
        saleProducts();
      break;
      case "View Low Inventory":
        lowInventory();
      break;
      case "Add to Inventory":
        addInventory();
      break;
      case "Add New Product":
        addNewProduct();
      break;
      default:
      console.log("Error");
    }
  });
}
starter();
var saleProducts = function(){
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    	console.log("Products for sale:")
    	for (i = 0; i < res.length; i++){
    		console.log(res[i].id + " " + res[i].product_name + "|" + " Department: "
    		+ res[i].department_name + "|" +" Price: " + res[i].price + "|" +" Stock Quantity: "+ res[i].stock_quantity);
    	}
  });
}
var lowInventory = function(){
  connection.query("SELECT * FROM products WHERE quantity=?", [100], function(err, res) {
      console.log(res);
      // for (i = 0; i < res.length; i++) {
      //   console.log(res[i].stock_quantity + " | " + res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
      // }
  });
}

var addInventory = function(){
  inquirer.prompt([{
      name: "prodid",
      type: "input",
      message: "What is the name of the product?"
    },{
    }]).then(function(answer){}
}

var addNewProduct = function(){
  inquirer.prompt([{
      name: "prodid",
      type: "input",
      message: "What is the name of the new product?"
    },{
      name: "department",
      type: "input",
      message: "What department does it belong in?"
    },{
      name: "price",
      type: "input",
      message: "How much is the item?"
    },{
      name: "quantity",
      type: "input",
      message: "How many are there?"
    }]).then(function(answer){
  connection.query("INSERT INTO products SET ?", {
    product_name: answer.prodid,
    department_name: answer.department,
    price:answer.price,
    stock_quantity: answer.quantity
  }, function(err, res) {});
    console.log("New item added!");
    starter();
  });
}
