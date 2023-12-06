import { TOrders, TUser } from "./users.interface";
import { Users } from "./users.model";

const createUserIntoDB = async (userData: TUser) => {
  const result = await Users.insertMany(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await Users.find(
    {}
  );

  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await Users.findOne({ userId: id });
  return result;
};

const updateUserFromDB = async (id: string, userData: TUser) => {
  const result = await Users.findOneAndUpdate({ userId: id }, userData);

  return result;
};

const deleteUserFromDb = async (id: string) => {
  const result = await Users.findOneAndDelete({ userId: id });
  return result;
};

const createOrderIntoUser = async (id: string, orderData: TOrders) => {
  const result = await Users.findOneAndUpdate({ userId: id }, {
    $push: {
      orders: orderData
    },
  },
    { new: true });

  return result;
};

const getAllOrderFromUser = async (id: string) => {
  const result = await Users.findOne({ userId: id }, { orders: 1 });
  return result;
};

const calculateUserOrder = async (id: string) => {
  const user = await Users.findOne({ userId: id });
  return user;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDb,
  createOrderIntoUser,
  getAllOrderFromUser,
  calculateUserOrder,
};
