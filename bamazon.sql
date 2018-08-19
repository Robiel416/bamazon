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