
import { FaTemperatureLow } from "react-icons/fa"

export default function Card_temp() {

    const Temp = 154.5
    let TempColor = ''
    let TempText = ''

    if (Temp < 25) {
        TempColor = "text-blue-400"
        TempText = "Amena"
    }
    else if (Temp > 25.5 && Temp < 160) 
        {
            TempColor = "text-amber-400 "
            TempText = "Media"
        }

    else if (Temp > 160 && Temp < 200) 
        {
            TempColor = "text-red-400 "
            TempText = "Quente"
        }

    else {
        TempColor = "text-red-800"
        TempText = "Chernobyl"
    }



    return (
        <div className="bg-gray-800 w-130 h-100 max-w-sm  rounded-2xl border border-gray-600 flex items-center justify-center">

            <div className="flex flex-col gap-3  items-center text-center">

                <p className='text-gray-500 text-sm md:text-base'>
                    Leitura atual
                </p>

                <FaTemperatureLow className= {`${TempColor} text-4xl md:text-5xl lg:text-6xl`} />

                <h1 className={`text-2xl md:text-3xl lg:text-4xl ${TempColor}`}>
                    {Temp} <span className='text-lg md:text-xl lg:text-2xl'>°C</span>
                </h1>

                <p className={`${TempColor} text-sm md:text-base`}>
                    {TempText}
                </p>

            </div>

        </div>
    );
}