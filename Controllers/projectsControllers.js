const express = require("express");

const {
  getAllProjects,
  getOneproject,
  updateProject,
  deleteProject,
  createProject,
} = require("../queries/projects.js");

const projects = express.Router();

projects.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneProject = await getOneproject(id);
  if (oneProject) {
    res.json(oneProject);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});
projects.get("/", async (req, res) => {
  console.log("GET Request received for all items.");
  const allProjects = await getAllProjects();
  if (allProjects[0]) {
    res.status(200).json({ success: true, data: { payload: allProjects } });
  } else {
    res
      .status(404)
      .json({ success: false, data: { error: "No projects found" } });
  }
});

projects.post("/", async (req, res) => {
  try {
    const createdProject = await createProject(req.body);
    res.status(201).json(createdProject);
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: "Cannot create project" });
  }
});

projects.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Delete request for item at id ${id} received`);
    const deletedProject = await deleteProject(id);
    if (deletedProject) {
      res
        .status(200)
        .json({ success: true, payload: { data: deletedProject } });
    } else {
      res.status(404).json({ success: false, error: "Project Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

projects.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`PUT request for item at id ${id} received.`);
  const updatedProject = await updateProject(id, req.body);
  console.log(updatedProject);
  if (updatedProject.id) {
    res.status(200).json(updatedProject);
  } else {
    res.status(404).json("No project found with that id" );
  }
});

module.exports = projects;
