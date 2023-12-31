import dotenv from "dotenv";
import path from "path";

//env config file
dotenv.config({
  path: path.join((process.cwd(), ".env")),
});

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  bcrypt_salt_round: process.env.SALT_ROUNDS,
};
