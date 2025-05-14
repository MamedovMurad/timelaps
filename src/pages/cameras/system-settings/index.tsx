import SecondaryButton from "../../../components/button/secondary";


export default function SystemSettings() {
    return (
        <main>
            <div >
                <h2 className=" text-white font-medium text-2xl">Kameranın sistem tənzimləmələri</h2>
            </div>
            <hr className=" border-neytral-300 opacity-20 rounded my-8" />

            <div className="h-[calc(100vh-201px)] overflow-y-auto rounded-2xl bg-neytral-700 p-5">

                <ul className=" font-semibold text-xl">
                    <li className=" flex text-white gap-x-2">
                        <p className=" text-neytral-300">Giriş gərginliyi:</p>
                        <h5>16V</h5>
                    </li>
                    <li className=" flex text-white gap-x-2 mt-6">
                        <p className=" text-neytral-300">Batareya gərginliyi:</p>
                        <h5>16V</h5>
                    </li>
                </ul>

                <ul className=" mt-20 grid grid-cols-3 gap-x-5">
                    <li>
                       <SecondaryButton text="DSLR USB sıfırla" onClick={()=>''}/>
                    </li>
                    <li>
                       <SecondaryButton text="GoPro USB sıfırla" onClick={()=>''}/>
                    </li>
                    <li>
                       <SecondaryButton text="Modem / GSM Port sıfırla" onClick={()=>''}/>
                    </li>
                </ul>




            </div>
        </main>
    )
}
