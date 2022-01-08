import axios from "./axios";

const accountApi = {
  login: (body) => {
    const url = "/api/account/login";
    return axios.post(url, {
      username: body.username,
      password: body.password,
    });
  },

  register: (body) => {
    console.log(body);
    const url = "/api/account/register";
    return axios.post(url, {
      fullname: body.fullname,
      birthday: body.birthday,
      username: body.username,
      password: body.password,
    });
  },

  get: () => {
    const url = "/api/account";
    const token = localStorage.getItem("token");
    if (!token) return null;

    return axios.get(url, {
      headers: { token: token },
    });
  },

  delete: () => {
    const url = "/api/account";
    const token = localStorage.getItem("token");
    if (!token) return null;

    return axios.delete(url, {
      headers: { token: token },
    });
  },

  update: (body) => {
    const url = "/api/account";
    const token = localStorage.getItem("token");
    if (!token) return null;

    return axios.put(
      url,
      {
        username: body.username,
        password: body.password,
        newpassword: body.newpassword,
        fullname: body.fullname,
        birthday: body.birthday,
      },
      {
        headers: { token: token },
      }
    );
  },
};

export default accountApi;
