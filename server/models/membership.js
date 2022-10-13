import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User reference cannot be empty"],
        index: true,
    },
    age: {
        type: Number,
        required: [true, "Age cannot be empty"],
        index: true,
    },
    gender: {
        type: String,
        required: [true, "Gender cannot be empty"],
    },
    height: {
        type: Number,
        default: true
    },
    weight: {
        type: Number,
        default: true
    },
    BMI: {
        type: Number,
        default: true
    },
    timeSlot: {
        type: String,
        default: true
    },
    plan: {
        type: String,
        default: true
    },
    description: {
        type: String,
        default: true
    },
    duration: {
        type: Number,
        required: [true, "Membership Duration cannot be empty"],
    },
    amount: {
        type: String,
        required: [true, "Amount cannot be empty"],
    },
    paymentMethod: {
        type: String,
        required: [true, "Membership Payment Method cannot be empty"],
    },
    paymentDate: {
        type: String,
        required: [true, "Membership Payment Date cannot be empty"],
    },
    isActive: {
        type: Boolean,
        default: true
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscription",
        required: [true, "Subscription reference cannot be empty"],
        index: true,
    },
});

const Membership = mongoose.model("Membership", membershipSchema);
Membership.createIndexes();
export default Membership;
