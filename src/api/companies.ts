import AxiosSingleton from "./agent";


const axios = AxiosSingleton.getInstance();

 const getCompanies = async () => {
  const response = await axios.get("/companies"); 
  return response.data;
};

export{
    getCompanies
}