CREATE DATABASE luxsonic;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username CHAR(255),
  password CHAR(255),
  email CHAR(255) UNIQUE
);

CREATE TABLE forms (
  form_id SERIAL PRIMARY KEY,
  firstName CHAR(255),
  lastName CHAR(255),
  form_uid uuid,
  form_date date,
  profission CHAR(255),
  user_id integer REFERENCES users (user_id)
);

INSERT INTO users (username, email, password) VALUES ('user2', 'user2@gmail.com', '456');
SELECT * FROM users WHERE username = 'user1' AND password = '123';