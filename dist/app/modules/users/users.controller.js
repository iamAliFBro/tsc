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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_validation_1 = __importDefault(require("./users.validation"));
const users_services_1 = require("./users.services");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const zodParseData = users_validation_1.default.parse(userData);
        const result = yield users_services_1.UserServices.createUserIntoDB(zodParseData);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User not created",
            error: {
                code: 404,
                description: "User created failed!",
            },
        });
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_services_1.UserServices.getAllUserFromDB();
        res.status(201).json({
            success: true,
            message: "Users fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Users not found",
            error: {
                code: 404,
                description: "Users not found!",
            },
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield users_services_1.UserServices.getSingleUserFromDB(userId);
        res.status(201).json({
            success: true,
            message: "Users fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedData = req.body;
        const { userId } = req.params;
        const result = yield users_services_1.UserServices.updateUserFromDB(userId, updatedData);
        res.status(201).json({
            success: true,
            message: "Users updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User updated failed",
            error: {
                code: 404,
                description: "User not updated!",
            },
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield users_services_1.UserServices.deleteUserFromDb(userId);
        res.status(202).json({
            success: true,
            message: "User deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User deleted failed",
            error: {
                code: 404,
                description: "User not deleted!",
            },
        });
    }
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const orderData = req.body;
        yield users_services_1.UserServices.createOrderIntoUser(userId, orderData);
        res.status(202).json({
            success: true,
            message: "Order created successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order create failed",
            error: {
                code: 404,
                description: "Order not created!",
            },
        });
    }
});
const getUserAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield users_services_1.UserServices.getAllOrderFromUser(userId);
        res.status(201).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            error: {
                code: 404,
                description: "Order not found!",
            },
        });
    }
});
const calculateUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { userId } = req.params;
        const user = yield users_services_1.UserServices.calculateUserOrder(userId);
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        let totalOrderPrice = 0;
        (_a = user === null || user === void 0 ? void 0 : user.orders) === null || _a === void 0 ? void 0 : _a.forEach((order) => {
            totalOrderPrice += (order === null || order === void 0 ? void 0 : order.price) * (order === null || order === void 0 ? void 0 : order.quantity);
        });
        res.status(201).json({
            success: true,
            message: "Total price calculated successfully!",
            data: {
                totalPrice: totalOrderPrice || 0
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
});
exports.UsersController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    createOrder,
    getUserAllOrders,
    calculateUserOrder,
};
