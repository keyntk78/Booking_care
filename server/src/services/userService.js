import db from "../models/index";
import bcrypt from "bcryptjs";

let handleLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // email tồn tài
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "password", "roleId"],
          raw: true,
        });

        if (user) {
          // kiểm tra mật khẩu
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = `OK`;
            userData.user = user;

            delete user.password;
            resolve(userData);
          } else {
            // return erro: sai mật khẩu
            userData.errCode = 3;
            userData.errMessage = `Wrong password.`;
            resolve(userData);
          }
        } else {
          // return erro: không tồn tài user
          userData.errCode = 2;
          userData.errMessage = `User's not found.`;
          resolve(userData);
        }
      } else {
        // return erro: email không toàn tại
        userData.errCode = 1;
        userData.errMessage = `Your's email isn't exist in your system. Please try other email.`;
        resolve(userData);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleLogin: handleLogin,
};
