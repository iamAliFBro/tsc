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
exports.UserServices = void 0;
const users_model_1 = require("./users.model");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.insertMany(userData);
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.find({});
    return result;
});
const getSingleUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOne({ userId: id });
    return result;
});
const updateUserFromDB = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOneAndUpdate({ userId: id }, userData);
    return result;
});
const deleteUserFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOneAndDelete({ userId: id });
    return result;
});
const createOrderIntoUser = (id, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOneAndUpdate({ userId: id }, {
        $push: {
            orders: orderData
        },
    }, { new: true });
    return result;
});
const getAllOrderFromUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOne({ userId: id }, { orders: 1 });
    return result;
});
const calculateUserOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_model_1.Users.findOne({ userId: id });
    return user;
});
exports.UserServices = {
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    updateUserFromDB,
    deleteUserFromDb,
    createOrderIntoUser,
    getAllOrderFromUser,
    calculateUserOrder,
};
