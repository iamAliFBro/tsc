"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
var hash = require('hash.js');
const fullNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
});
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: [true, "Street is required"] },
    city: { type: String, required: [true, "City is required"] },
    country: { type: String, required: [true, "Country is required"] },
});
const ordersSchema = new mongoose_1.Schema({
    productName: { type: String, required: [true, "Product name is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    quantity: { type: Number, required: [true, "Quantity is required"] },
});
const userSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: [true, "User ID is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    fullName: { type: fullNameSchema, required: [true, "Full name is required"] },
    age: { type: Number, required: [true, "Age is required"] },
    email: { type: String, required: [true, "Email is required"] },
    isActive: { type: Boolean, required: [true, "isActive is required"] },
    hobbies: [{ type: String }],
    address: { type: addressSchema, required: [true, "Address is required"] },
    orders: [{ type: ordersSchema }],
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        user.password = hash.sha256().update(user.password).digest('hex');
        next();
    });
});
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});
//
exports.Users = (0, mongoose_1.model)("Users", userSchema);
