import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login");
};

// module.exports = {
//   handleLogin: handleLogin,
// };

export { handleLoginAPI };
