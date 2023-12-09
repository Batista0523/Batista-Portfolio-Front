\c projects_devs;

DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT,
    repolink VARCHAR(255),
    deployedlink VARCHAR(255)
)