
import { Link } from 'react-router-dom'

type Props = {
    isFull?: boolean
}

export default function DisplayUi({ isFull = false }: Props) {
    const buttons = [{ name: "Tam ekran", path: "/cameras/detail/full-screen", isActive: isFull }, { name: "Müqayisə", path: "/cameras/detail", isActive: !isFull }]
    return (
        <div>
            <h4 className=' text-white mb-4 font-normal text-base mt-2'>Displey rejimləri</h4>
            <ul className=" flex gap-x-3">
                {
                    buttons.map((item, index:number) => (
                        <li key={item.name}>
                            <Link to={item.path} className={'  text-white  w-24 h-6 flex justify-center items-center text-sm ' +(index===0?"rounded-tl-lg rounded-bl-lg ":"rounded-tr-lg rounded-br-lg ") + (item.isActive ? "bg-[#0096FF]" : " bg-neytral-500")}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}