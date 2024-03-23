const express = require("express");

const {
  getAllUsers, // Corrected function name
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../queries/user.js");

const users = express.Router();

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneUser = await getOneUser(id);
  if (oneUser) {
    res.json(oneUser);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});

users.get("/", async (req, res) => {
  console.log("GET Request received for all users.");
  const allUsers = await getAllUsers(); // Corrected function name
  if (allUsers[0]) {
    res.status(200).json({ success: true, data: { payload: allUsers } });
  } else {
    res.status(404).json({ success: false, data: { error: "No users found" } });
  }
});

users.post("/", async (req, res) => {
  try {
    const createdUser = await createUser(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: "Cannot create user" });
  }
});

users.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Delete request for user with id ${id} received`);
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
      res.status(200).json({ success: true, payload: { data: deletedUser } });
    } else {
      res.status(404).json({ success: false, error: "User Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

users.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`PUT request for user with id ${id} received.`);
  const updatedUser = await updateUser(id, req.body);
  if (updatedUser.id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ success: false, error: "User Not Found" });
  }
});

module.exports = users;
