CREATE DATABASE luxsonic;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username CHAR(255),
  password CHAR(255)
);

CREATE TABLE form (
  form_id SERIAL PRIMARY KEY,
  firstName CHAR(255),
  lastName CHAR(255),
  form_uid uuid,
  form_date date 
);