import { Link } from "react-router-dom"
import CloudSettingsForm from "../../../containers/form/cloudSettingsForm"
import { BackIcon } from "../../../svg"




const CloudSettingsPage = () => {
    return (
        <main>
            <div>


                <div className=' flex'>
                    <div>
                        <Link to={"/cameras"} className=' flex gap-4 items-center hover:bg-neytral-500 transition-colors p-3 rounded-md'>
                            <span><BackIcon /></span>
                            <h2 className=" text-white font-medium text-2xl">Kameranın şəbəkə tənzimləmələri</h2>

                        </Link>
                    </div>
                </div>
                <hr className=" border-neytral-300 opacity-20 rounded my-8" />
                <div className="bg-neytral-700 p-4 pt-6 rounded-xl">


                    <CloudSettingsForm />
                </div>
            </div>
        </main>
    )
}

export default CloudSettingsPage