
import AxiosSingleton from "./agent";


const axios = AxiosSingleton.getInstance();

 const getProjects = async () => {
  const response = await axios.get("/projects?stats=true&include-test=false&archived=true"); // https://api.mydisk.az/api/v1/projects?stats=true&include-test=false&archived=true
  return response.data;
};

const getProjectsOptions = async (id="") => {
  const response = await axios.get("/projects?stats=true&include-test=false&archived=false&companyId="+id); // https://api.mydisk.az/api/v1/projects?stats=true&include-test=false&archived=true
  return response.data;
};

const getProjectsFolder = async (id:number|string) => {
  const response = await axios.get(`/projects/${id}/cameras?stats=true&include-test=false`); // https://api.mydisk.az/api/v1/projects?stats=true&include-test=false&archived=true
  return response.data;
};




export {
  getProjects,
  getProjectsFolder,
  getProjectsOptions

}