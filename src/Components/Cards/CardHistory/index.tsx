import { FaTrash } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


type HistoricProp = {
    Temp: number,
    onDelete: () => void
}

export default function CardHistory({Temp, onDelete } : HistoricProp    ) {

    let TempColor  = ''
    
    if (Temp < 25) TempColor = "text-blue-400"
    else if (Temp > 25.5 && Temp < 160) TempColor = "text-amber-400 "
    else if (Temp > 160 && Temp < 200) TempColor = "text-red-400 "
    else TempColor = "text-red-800"

    const Hora = new Date()
    return (
        <div className="w-230 h-10 bg-[#191C23] rounded-2xl border border-gray-600 flex  items-center justify-between pl-5 pr-5 ">
            <div className="flex flex-row gap-3 items-center">
                <h1 className={`${TempColor} font-bold text-2xl`}>{Temp}°C </h1>
                <p className="flex items-center gap-1 text-gray-500"><FaLocationDot /> {Hora.toLocaleDateString()}</p>
            </div>

            <button onClick={onDelete} className=" p-2 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors duration-200">
                <FaTrash className="w-5 h-5" />
            </button>
        </div>
    )
}