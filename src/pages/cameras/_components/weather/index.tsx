
import { RainyWeatherSVG } from '../../../../svg';

type Props = {
    degree: number;
    location: string
}

export default function WeatherUI({ degree, location }: Props) {
    return (
        <div className=' flex px-3 items-center justify-between'>
            <div>
                <h2 className=' text-white font-semibold text-6xl'>
                    {degree}
                </h2>
                <p className=' text-white text-base my-3'>Yağışlı</p>
                <p className=' text-sm text-neytral-300'>{location}</p>


            </div>

            <div>
                <RainyWeatherSVG />
            </div>

        </div>
    )
}