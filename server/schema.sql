DROP DATABASE IF EXISTS movie_list;
CREATE DATABASE IF NOT EXISTS movie_list;

USE movie_list;

CREATE TABLE movies (
	id INT NOT NULL UNIQUE PRIMARY KEY,
	title VARCHAR(255)
);