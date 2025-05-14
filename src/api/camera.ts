
import AxiosSingleton from "./agent";


const axios = AxiosSingleton.getInstance();

 const getCameras = async () => {
  const response = await axios.get("/cameras"); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};
const takePhoto = async (id:string)=>{
  const response = await axios.post(`/cameras/${id}/photo`)
  return response.data
}



export {
  getCameras,
  takePhoto
}