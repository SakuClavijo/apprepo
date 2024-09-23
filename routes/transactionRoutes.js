const express = require("express");
const router = express.router();
const transactionController = require("../controllers/transactionController");

//Rutas para el CRUD de las Transacciones

router.post("/transactions", transactionController.createTransaction); //Crear Transacción
router.get("/transactions/:id", transactionController.getTransaction); //Leer Transacción
router.put("/transactions/:id", transactionController, updateTransaction); //Actualizar Transacción
router.delete("/transactions/:id", transactionController, deleteTransaction); //Eliminar Transacción

module.exports = router;