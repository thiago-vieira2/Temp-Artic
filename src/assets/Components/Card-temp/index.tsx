import './index.css'
import { FaTemperatureLow } from "react-icons/fa";


export default function Card_temp () {
    return(
        <div className="bg-gray-800 w-100 h-100 rounded-2xl border border-gray-600 ">
            <div className="flex flex-col gap-3.5 w-100 h-100 justify-center items-center " >
                <p className='text-gray-500'>Leitura atual</p>
                <FaTemperatureLow  className='text-blue-400'/>
                <h1 className='text-4xl text-blue-400'>14.4 <span className='text-2xl text-blue-400'>C°</span></h1>
                <p className='text-blue-400'>Amena</p>
            </div>
        </div>
    );
}