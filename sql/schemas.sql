CREATE SCHEMA IF NOT EXISTS bookstore;

CREATE TABLE IF NOT EXISTS bookstore.account (
   username VARCHAR(50),
   password VARCHAR(255) NOT NULL,
   fullname VARCHAR(255),
   phone VARCHAR(50),
   address TEXT,
   PRIMARY KEY(username)
);
