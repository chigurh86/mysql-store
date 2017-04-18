USE Bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NULL,
  price INT(100) NULL,
  stock_quantity INT(100) NULL,

  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Expendables DVD", "Electronics", 3.00, 20);
  
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wooden Armchair", "Furniture", 25.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("King Sized Bed", "Furniture", 1000.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mickey Socks", "Clothing", 5.50, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Figure", "Toys", 15.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4 Remote", "Toys", 65.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer Mouse", "Electronics", 15.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-shirt", "Clothing", 20.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Clothing", 25.00, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iron Man DVD", "Electronics", 25.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bra", "Clothing", 10.00, 27);

