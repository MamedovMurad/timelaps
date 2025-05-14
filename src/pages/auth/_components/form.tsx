import { useState } from "react"
import { loginUser } from "../../../api/user"
import { KeyIcon, UserIcon } from "../../../svg"
import { useNavigate } from "react-router-dom"




type Props = {}

export const AuthForm = (props: Props) => {
  const [values, setValues] = useState({ email: "anarbabacan9@gmail.com", password: "soleH@le32" })
const navigate  = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    loginUser(values).then((data) => {
     navigate("/")
     localStorage.setItem("agent",data.data?.token)
    }).catch((error: any) => {
  
    })
  }
  return (
    <div >
      <form onSubmit={handleSubmit} className=" max-w-[600px]  mx-auto container bg-[#637CBF00]/5  backdrop-blur-xl rounded-2xl min-h-52 shadow p-8 border border-white/10">
        <div>
          <label htmlFor="" className=" block text-white font-normal text-base">İstifadəçi adı</label>
          <div className=" relative ">
            <span className=" absolute left-5 top-5"><UserIcon /></span>
            <input defaultValue={"anarbabacan9@gmail.com"} onChange={(e)=>setValues({...values, email:e.target.value})} className=" bg-[#212C4C] w-full rounded-lg mt-2 h-14 text-[#91A5CD] px-14" type="text" />
          </div>
        </div>

        <div className=" mt-4">
          <label htmlFor="" className=" block text-white font-normal text-base"> Şifrə</label>
          <div className=" relative">
            <span className=" absolute left-5 top-5"><KeyIcon /></span>
            <input defaultValue={"soleH@le32"} onChange={(e)=>setValues({...values, password:e.target.value})} className=" bg-[#212C4C] w-full rounded-lg mt-2 h-14 text-[#91A5CD] px-14" type="text" />
          </div>
        </div>

        <div className=" mt-12">
          <button  className=" bg-[#F58020] w-full rounded-lg mt-2 h-14 text-white font-semibold">
            Daxil ol
          </button>
        </div>
      </form>
    </div>
  )
}