import { useEffect, useState } from "react"
import ProjectCard from "./_components/card"
import { getProjects, getProjectsFolder } from "../../api/project"
import { Project } from "../../models/cameras"
import { Spin } from "antd"
import { useParams } from 'react-router-dom';


type Props = {}

export default function ProjectPage({ }: Props) {
  const [data, setdata] = useState<Project[]|null>(null)
  const [loading, setloading] = useState(false)
  const { id } = useParams();
  function getProjectsdata (){
    setloading(true)
    getProjects().then((data) => {
      setdata(data.data.entities)
    }).finally(() => {
      setloading(false)
    })
  }

  function getFolders (param:string|number){
    getProjectsFolder(param).then((data) => {
      setdata(data.data)
    }).finally(() => {
      setloading(false)
    })
  }


  
  useEffect(() => {
    if (id) {
      return getFolders(id)   
    }
  return getProjectsdata()
  
  }, [id])



  return (
    <main >
       <div>
                <h2 className="text-white font-medium text-2xl">Projects</h2>
            </div>
            <hr className="border-neytral-300 opacity-20 rounded my-8" />
       <div className="h-[calc(100vh-201px)] overflow-y-auto rounded-2xl bg-neytral-700 p-5">
        {
          loading&&   <div className=" flex justify-center items-center w-full h-full"><Spin size="large"/></div>
        }
      <ul className=" grid grid-cols-3 gap-4"> 
        {
    data?.map((item,index) => (
          <ProjectCard key={index} data={item}  path={ ("/projects/folder-cameras/"+item.id)} />
        ))
        }
      </ul>
      </div>
    </main>
  )
}