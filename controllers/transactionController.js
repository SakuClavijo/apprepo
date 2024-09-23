const Transaction = require("../models/transactionModel");

//Crear transaccion

exports.createTransaction = async (req,res) => {
    try{ 
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

//Leer transacciones

exports.getTransaction = async (req, res) => {
    try{ 
        const transaction = await Transaction.findByYd(req.params.id);
        if (!transaction) return res.status(404).json({message: "Transaccion no encontrada"})
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//Actualizar transaccion

exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if(!transaction) return res.status(404).json({message: "Transaccion no encontrada"});
        res.status(200).json(transaction);
    } catch(error){
        res.status(400).json({error: error.message});
    }
};

//Borrar transaccion

exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if(!transaction) return res.status(404).json({message: "Transaccion no encontrada"});
        res.status(204).json();
    } catch(error){
        res.status(400).json({error: error.message});
    }
};



