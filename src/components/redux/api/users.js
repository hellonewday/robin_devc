export const fetchLogin = async (username, password) => {
  let response = await fetch("https://robin-devc.herokuapp.com/users/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  let result = await response.json();
  return result;
};

export const fetchRegister = async (data) => {
  let response = await fetch("https://robin-devc.herokuapp.com/users", {
    method: "POST",
    headers: {
        "content-type": "application/json",
      },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
      gender: data.gender,
      email: data.email,
      fullname: data.fullname,
      age: parseInt(data.age),
    }),
  });
  let result = await response.json();
  return result;
};
