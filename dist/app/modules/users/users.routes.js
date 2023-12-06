"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const route = express_1.default.Router();
route.post("/", users_controller_1.UsersController.createUser);
route.get("/", users_controller_1.UsersController.getAllUser);
route.get("/:userId", users_controller_1.UsersController.getSingleUser);
route.put("/:userId", users_controller_1.UsersController.updateUser);
route.delete("/:userId", users_controller_1.UsersController.deleteUser);
route.post("/:userId/orders", users_controller_1.UsersController.createOrder);
route.get("/:userId/orders", users_controller_1.UsersController.getUserAllOrders);
route.get("/:userId/orders/total-price", users_controller_1.UsersController.calculateUserOrder);
exports.userRouter = route;
