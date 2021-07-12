CREATE DATABASE luxsonic;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username CHAR(255),
  password CHAR(255)
);