import CloudSettingsForm from "../../../containers/form/cloudSettingsForm"


type Props = {}

const CloudSettingsPage = (props: Props) => {
    return (
        <main>
            <div>
                <div >
                    <h2 className=" text-white font-medium text-2xl">Kameranın şəbəkə tənzimləmələri</h2>
                </div>
                <hr className=" border-neytral-300 opacity-20 rounded my-8" />
                <div className="bg-neytral-700 p-4 pt-6 rounded-xl">


                       <CloudSettingsForm/>
                </div>
            </div>
        </main>
    )
}

export default CloudSettingsPage