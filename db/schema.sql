\c projects_devs;

DROP TABLE IF EXISTS contact_forms;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS app_user;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT,
    repolink VARCHAR(255),
    deployedlink VARCHAR(255)
);


CREATE TABLE app_user (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL
);