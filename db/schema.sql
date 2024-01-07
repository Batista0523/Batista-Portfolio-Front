\c projects_devs;


DROP TABLE IF EXISTS projects;


CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT,
    repolink VARCHAR(255),
    deployedlink VARCHAR(255)
);
DROP TABLE IF EXISTS contact_forms;


CREATE TABLE IF NOT EXISTS contact_forms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);
