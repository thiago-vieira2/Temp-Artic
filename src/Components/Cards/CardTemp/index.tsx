
import { FaTemperatureLow } from "react-icons/fa"

export default function Card_temp () {
    return(
        <div className="bg-gray-800 w-130 h-100 max-w-sm  rounded-2xl border border-gray-600 flex items-center justify-center">
            
            <div className="flex flex-col gap-3  items-center text-center">

                <p className='text-gray-500 text-sm md:text-base'>
                    Leitura atual
                </p>

                <FaTemperatureLow className='text-blue-400 text-4xl md:text-5xl lg:text-6xl'/>

                <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-400'>
                    14.4 <span className='text-lg md:text-xl lg:text-2xl'>°C</span>
                </h1>

                <p className='text-blue-400 text-sm md:text-base'>
                    Amena
                </p>

            </div>

        </div>
    );
}