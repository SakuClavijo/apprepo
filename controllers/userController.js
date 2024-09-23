const User = require("../models/userModel");

//Crear usuario

exports.createUser = async (req,res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
};

//Leer un usuario

exports.getUser = async (req,res) => {
    try{ 
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!user) return res.status(404).json({message: "Usuario no encontrado"});
        res.status(200).json(user);
    } catch (error) {
      res.status(400).json({error: error.message});

    }
};

//Actualizar un usuario

exports.updateUser = async (req,res) => {
    try{
        const user = await User.finByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) return res.status(404).json({message: "Usuario no encontrado"});
        res.status(200).json(user);

    } catch (error) {
      res.status(400).json({error: error.message});
    }
};

//Eliminar un usuario

exports.deleteUser = async (req,res) => {
    try{
        const user = await User.fondByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({message: "Usuario no encontrado"}) 
    } catch (error){
}     res.status(400).json({error: error.message});
};