CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
);

INSERT INTO employee 
VALUES (1,"joe",1000),
       (2 , "henry",2000),
       (3, "Sam",2500),
       (4,"Max",1500);

