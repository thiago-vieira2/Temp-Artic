import { useState } from "react";
import CardHistory from "../../Cards/CardHistory";


export default function HistoricoTemp() {

    const [services, setServices] = useState([
        {Temp: 20.1},
        {Temp: 26.5},
        {Temp: 170.5},
        {Temp: 370.5}
    ])

    function Delete (index: number) {
        const New = services.filter((_, i) => i !== index)
        setServices(New)    
    }

    return (
        <div className="bg-gray-800 w-260 h-auto  rounded-2xl border border-gray-600 flex flex-col items-start justify-center gap-4 pl-10 ">
            <div>
                <h1 className="text-gray-500">Historico - {services.length} registros</h1>
            </div>

            <div className="flex flex-col gap-3">
                {services.map((service, index) => {
                    console.log(service)
                    return (
                        <CardHistory
                            key={index}
                            Temp={service.Temp}
                            onDelete={() => Delete(index)}
                        />
                    )
                })}
            </div>
        </div>
    );
}