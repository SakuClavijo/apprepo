const mongoose = requiere("mongoose");

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    amount: { type: Number, required: true},
    type: { type: String, enum:["savings", "investment"], required: true },
    date: { type: Date, default: Date.now}
})

const Transaction = mongoose.model("Transaction",transactionSchema);
module.exports = Transaction;