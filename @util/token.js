const setToken = (token, user) => {
  window.localStorage.user = JSON.stringify(user);
  window.localStorage.userToken = token;
};

const getToken = () => {
  return window.localStorage.userToken;
};

const getUser = () => {
  return window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : undefined;
};

const resetToken = () => {
  delete window.localStorage.userToken;
  delete window.localStorage.user;
};

export default {
  setToken,
  getToken,
  resetToken,
  getUser
};
