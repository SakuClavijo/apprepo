const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Rutas para el CRUD de los Users

router.post("/users", userController.createUser); //Crear Usuario
router.get("/users/:id", userController.getUser); //Leer Usuario
router.put("/users/id", userController,updateUser); //Actualizar Usuario
router.delete("/users/:id", userController,deleteUser); //Eliminar Usuario

module.exports = router;