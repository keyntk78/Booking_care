import userService from "../services/userService";

let handleLogin = async (req, res) => {
  //check email exists
  //compare password
  //return userInfo
  // accessToken : JWT
  let email = req.body.email;
  let password = req.body.password;

  console.log("--------------------------------");
  console.log(email, password);

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameters",
    });
  }

  let userData = await userService.handleLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handleLogin: handleLogin,
};
