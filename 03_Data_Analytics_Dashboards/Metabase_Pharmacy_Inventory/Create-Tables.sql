CREATE DATABASE IF NOT EXISTS PharmacyInventory;
USE PharmacyInventory;

CREATE TABLE Medicines (
    medicine_id INT PRIMARY KEY AUTO_INCREMENT,
    drug_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    brand_name VARCHAR(50),
    price DECIMAL(6,2),
    expiration_date DATE,
    quantity_in_stock INT
);

CREATE TABLE Suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(100),
    address VARCHAR(255)
);

CREATE TABLE Sales (
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    medicine_id INT,
    quantity_sold INT,
    sale_date DATE,
    total_price DECIMAL(8,2),
    FOREIGN KEY (medicine_id) REFERENCES Medicines(medicine_id) ON DELETE CASCADE
);

CREATE TABLE Stock_Purchases (
    purchase_id INT PRIMARY KEY AUTO_INCREMENT,
    medicine_id INT,
    supplier_id INT,
    quantity_added INT,
    purchase_date DATE,
    FOREIGN KEY (medicine_id) REFERENCES Medicines(medicine_id) ON DELETE CASCADE,
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id) ON DELETE CASCADE
);

CREATE TABLE Controlled_Medicine (
    controlled_id INT PRIMARY KEY AUTO_INCREMENT,
    medicine_id INT,
    doctor_name VARCHAR(100),
    patient_name VARCHAR(100),
    date_prescribed DATE,
    FOREIGN KEY (medicine_id) REFERENCES Medicines(medicine_id) ON DELETE CASCADE
);

SHOW TABLES;