// services/userService.ts

import AxiosSingleton from "./agent";


const axios = AxiosSingleton.getInstance();

 const getUserProfile = async () => {
  const response = await axios.get("/users/me?full=true"); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get("/users"); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};
const deleteUser = async (id:string|number) => {
  const response = await axios.delete("/users/"+id); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};

const crateUser = async (params:any) => {
  const response = await axios.post("/users",params); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};

const loginUser = async (values:{email:string, password:string})=>{
  const response = await axios.post("auth/login",values)
  return response.data
}

export {
  loginUser,
  getUserProfile,
  getUsers,
  crateUser,
  deleteUser
}
