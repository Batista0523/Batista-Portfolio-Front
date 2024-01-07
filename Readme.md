# Batista Portfolio Backend

Welcome to the backend of the Batista Portfolio project. This section provides an overview of the structure and components of the backend system.

## Table of Contents

- [Batista Portfolio Backend](#batista-portfolio-backend)
  - [Table of Contents](#table-of-contents)
  - [Files and Directory Structure](#files-and-directory-structure)
  - [Database Setup](#database-setup)
  - [Endpoints and Controllers](#endpoints-and-controllers)
  - [Running the Backend](#running-the-backend)
  - [Database Schema](#database-schema)
  - [Seed Data](#seed-data)
  - [Contact](#contact)

## Files and Directory Structure

- **app.js:**
  - Main application file responsible for setting up the Express server.

- **server.js:**
  - Entry point for running the server.

- **db.config.js:**
  - Configuration file for connecting to the PostgreSQL database.

- **controller.js:**
  - Controller file containing logic for handling project-related operations.

- **schema.sql:**
  - SQL script defining the database schema.

- **seed.sql:**
  - SQL script containing seed data for initial database population.

## Database Setup

1. **Database Configuration:**
   - Configure your database connection in the `db.config.js` file.

2. **Create Database:**
   - Run the schema.sql script to create the necessary tables and structure in your PostgreSQL database.

3. **Seed Database:**
   - Optionally, run the seed.sql script to populate the database with initial data.

## Endpoints and Controllers

- **/api/projects:**
  - GET: Retrieve a list of projects.
  - POST: Add a new project.



Detailed logic for these endpoints can be found in the `controller.js` file.

## Running the Backend

1. **Install Dependencies:**
   - Run `npm install` to install the required packages.

2. **Start the Server:**
   - Run `node server.js` to start the Express server.

The backend will be accessible at [(http://localhost:3485/)]

## Database Schema

The database schema is defined in the `schema.sql` file. It includes tables for projects and any other relevant data.

## Seed Data

The `seed.sql` file contains sample data to initialize the database with some projects.


## Contact

- Email: elisaulbatista@pursuit.org
- LinkedIn: [ LinkedIn Profile](https://www.linkedin.com/in/elisaul-batista/)
- GitHub: [ GitHub Profile](https://github.com/Batista0523)
