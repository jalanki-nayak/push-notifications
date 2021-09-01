CREATE DATABASE pushnotification;

CREATE TABLE notificationlist(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    notification varchar(255)
);

INSERT INTO notificationlist (name, notification) VALUES ("Jalanki","My Name is Jalanki Nayak");
INSERT INTO notificationlist (name, notification) VALUES ("Kartik","My Name is Kartik Agrawal");
INSERT INTO notificationlist (name, notification) VALUES ("Tushar","My Name is Tushar Gupta");
INSERT INTO notificationlist (name, notification) VALUES ("Yash","My Name is Yash Gautam");
INSERT INTO notificationlist (name, notification) VALUES ("Anubhav","My Name is Anubhav Nag");