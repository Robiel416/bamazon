DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
use bamazon_db;

CREATE TABLE products(
	itemid INTEGER AUTO_INCREMENT NOT NULL,
    productname VARCHAR(45) NOT NULL,
    departmentname VARCHAR(45) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    stockquantity INTEGER(10) NOT NULL,
    PRIMARY KEY (itemid)    
);

INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity)
VALUES("Levis", "Apparel", 89.99, 11),
("Safety razor", "Men's Grooming", 39.99, 15),
("Rubik's Cube", "Puzzles/Games", 19.99, 7),
("Bose Speaker", "Electronics", 219.99, 10),
("Sunglasses", "Eyewear", 179.99, 15),
("Table Fan", "Home", 14.99, 20),
("Nike Shoes", "Footwear", 149.99, 5),
("Raspberry Pi", "Electronics", 29.99, 22),
("Pressure Cooker", "Kitchen", 74.99, 3),
("Car Tires", "Automotive", 399.99, 4);


SELECT * FROM bamazon_db.products;