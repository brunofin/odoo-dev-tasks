CREATE TABLE Product (
    id INT NOT NULL,
    name VARCHAR(255),
    price INT,
    create_date DATETIME,
    PRIMARY KEY (id)
)

CREATE TABLE Category (
    id INT NOT NULL,
    name VARCHAR(255),
    is_public BOOLEAN,
    PRIMARY KEY (id)
)

CREATE TABLE Product_Category (
    id INT PRIMARY KEY,
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);
