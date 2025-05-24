
import { getStartEndOfDayMs } from "../utility/dateUtils";
import AxiosSingleton from "./agent";


const axios = AxiosSingleton.getInstance();

 const getCameras = async () => {
  const response = await axios.get("/cameras"); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};
const servo = async (id:string)=>{
  const response = await axios.post(`/cameras/${id}/servo`)
  return response.data
}
const takePhoto = async (id:string)=>{
  const response = await axios.post(`/cameras/${id}/photo`)
  return response.data
}

const createCamera = async (param:any)=>{
  const response = await axios.post(`/cameras`, param)
  return response.data
}

const deleteCamera = async (id:string|number) => {
  const response = await axios.delete("/cameras/"+id); // https://api.mydisk.az/api/v1/users/me?full=true
  return response.data;
};

const getFilesCarousel = async (
  id: string,
  fromDateMs?: number,
  toDateMs?: number
) => {
  const defaultDates = getStartEndOfDayMs();
  const from = fromDateMs ?? defaultDates.fromDateMs;
  const to = toDateMs ?? defaultDates.toDateMs;

  const response = await axios.get(`/cameras/${id}/files`, {
    params: {
      test: false,
      fromDateMs: from,
      toDateMs: to,
      limit: 1000000000,
      offset: 0,
    },
  });

  return response.data;
};

                                                        //https://api.mydisk.az/api/v1/cameras/93/files?test=false&fromDateMs=1746428400000&toDateMs=1746514800000&limit=1000000000&offset=0

export {
  getCameras,
  takePhoto,
  deleteCamera,
  createCamera,
  getFilesCarousel,
  servo
}