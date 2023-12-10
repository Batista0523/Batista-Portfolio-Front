const db = require("../db/db.Config.js");

const getAllProjects = async () => {
    try {
      const allProjects = await db.any("SELECT * FROM projects");
      console.log("Data retrieved from the database:", allProjects);
      return allProjects;
    } catch (err) {
      console.error("Error in getAllProjects:", err);
      throw err;
    }
  };
  

const getOneproject = async (id) => {
  try {
    const oneProject = await db.one("SELECT * FROM projects WHERE id=$1", id);
    return oneProject;
  } catch (error) {
    return error;
  }
};

const createProject = async (project) => {
  try {
    const createdProject = await db.one(
      "INSERT INTO projects (  title, descriptions, repolink, deployedlink) VALUES($1,$2,$3,$4) RETURNING *",
      [
        project.title,
        project.descriptions,
        project.repolink,
        project.deployedlink,
      ]
    );
    return createdProject;
  } catch (error) {
    return error;
  }
};

const deleteProject = async (id) => {
    try {
      const deletedProject = await db.one(
        "DELETE FROM projects WHERE id=$1 RETURNING *",
        id
      );
      return deletedProject;
    } catch (error) {
      return error;
    }
  };
  
const updateProject = async (project) => {
  try {
    const { title, descriptions, repolink, deployedlink } = project;
    const updatedProject = await db.one(
      "UPDATE project SET title=$1, descriptions=$2,repolink=$3,deployedlink=$4 WHERE id=$5 RETURNING *",
      [title, descriptions, repolink, deployedlink]
    );
    return updatedProject;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProjects,
  getOneproject,
  updateProject,
  deleteProject,
  createProject,
};
