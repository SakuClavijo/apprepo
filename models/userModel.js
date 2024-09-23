const mongoose = requiere("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    bankAccount: { type: String },
    investmentsPreferences: {
        riskLevel: {type: String, default: "medium"},
        savingPercentage: { type: Number, default: 10}
    },
    createdAt: { type: Date, default: Date.now}
});
const User = mongoose.model("User", userSchema);
module.exports = User;