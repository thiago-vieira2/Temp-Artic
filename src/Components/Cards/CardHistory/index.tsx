
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import API from "../../Data/API";




type HistoricProp = {
    Temp: number,
    Date: string
}

type TempAPI = {
    Date: String
}

export default function CardHistory({Temp } : HistoricProp    ) {


    let TempColor  = ''
    const [, setDados] = useState<TempAPI[]>([])
    

    useEffect(() => {
        try {
            async function carregar () {
                const data: TempAPI[] = await API()
                setDados(data)
                
                
                
            }   

            carregar()
        } catch (error) {
            console.error("err : " + error )
        }
    }, [ ])
    
    if (Temp < 25) TempColor = "text-blue-400"
    else if (Temp > 25.5 && Temp < 160) TempColor = "text-amber-400 "
    else if (Temp > 160 && Temp < 200) TempColor = "text-red-400 "
    else TempColor = "text-red-800"

    const Hora = new Date()
    return (
        <div className="w-230 h-10 bg-[#2B3035] rounded-2xl flex  items-center justify-between pl-5 pr-5 ">
            <div className="flex flex-row gap-3 items-center">
                <h1 className={`${TempColor} font-bold text-2xl`}>{Temp/100}°C </h1>
                <p className="flex items-center gap-1 text-gray-500"><FaLocationDot /> {Hora.toLocaleDateString()}</p>
            </div>

    
        </div>
    )
}