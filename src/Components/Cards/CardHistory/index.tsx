import { FaTrash } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


export default function CardHistory() {

    const Hora = new Date()
    return (
        <div className="w-230 h-10 bg-[#191C23] rounded-2xl border border-gray-600 flex  items-center justify-between pl-5 pr-5 ">
            <div className="flex flex-row gap-3 items-center">
                <h1 className="text-amber-400 font-bold text-2xl">24.5°C </h1>
                <p className="flex items-center gap-1 text-gray-500"><FaLocationDot /> {Hora.toLocaleDateString()}</p>
            </div>

            <button className=" p-2 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors duration-200">
                <FaTrash className="w-5 h-5" />
            </button>
        </div>
    )
}