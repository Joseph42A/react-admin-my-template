import axios from "axios";

export const authProvider = {
  login: async ({ username, password }) => {
    await axios
      .post("https://fronttask.techeyeco.com/api/Accounts/login", {
        username,
        password,
        rememberMe: true,
      })
      .then(({ data }) => {
        console.log("Joseph response : ", data);
        localStorage.setItem("user", JSON.stringify(data));
        return Promise.resolve();
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
