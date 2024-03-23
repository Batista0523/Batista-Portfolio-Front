const db = require("../db/db.Config.js");

const getAllUsers = async () => {
    try {
      const allUsers = await db.any("SELECT * FROM app_user");
      console.log("Data retrieved from the database:", allUsers);
      return allUsers;
    } catch (err) {
      console.error("Error in getAllUsers:", err);
      throw err;
    }
  };
  
  const getOneUser = async (id) => {
    try {
      const oneUser = await db.one("SELECT * FROM app_user WHERE id=$1", id);
      return oneUser;
    } catch (error) {
      return error;
    }
  };
  
  const createUser = async (user) => {
    try {
      const createdUser = await db.one(
        "INSERT INTO app_user (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          user.firstname,
          user.lastname,
          user.email,
          user.password,
        ]
      );
      return createdUser;
    } catch (error) {
      return error;
    }
  };
  
  const deleteUser = async (id) => {
    try {
      const deletedUser = await db.one(
        "DELETE FROM app_user WHERE id=$1 RETURNING *",
        id
      );
      return deletedUser;
    } catch (error) {
      return error;
    }
  };
  
  const updateUser = async (id, user) => {
    try {
      const { firstname, lastname, email, password } = user;
      const updatedUser = await db.one(
        "UPDATE app_user SET firstname=$1, lastname=$2, email=$3, password=$4 WHERE id=$5 RETURNING *",
        [firstname, lastname, email, password, id]
      );
      return updatedUser;
    } catch (err) {
      return err;
    }
  };
  
  module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
  };
  