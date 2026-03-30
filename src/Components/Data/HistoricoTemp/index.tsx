import { useEffect, useState } from "react";
import CardHistory from "../../Cards/CardHistory";
import API from "../API";

type TempData = {
    Temp: number;
    Data: string;
};

export default function HistoricoTemp() {

    const [services, setServices] = useState<TempData[]>([]);

    useEffect(() => {
        async function carregar() {
            try {
                const data = await API();

                const formatado: TempData[] = data.map((item: any) => ({
                    Temp: item.Temp,
                    Data: item.Data ?? new Date().toISOString()
                }));

                console.log(formatado)

                setServices(formatado);

                console.log(services)

            } catch (error) {
                console.error("Erro ao carregar API:", error);
            }
        }

        carregar();
    }, []);



    return (
        <div className="bg-[#343A40] w-260 h-auto rounded-2xl flex flex-col items-start justify-center gap-4 pl-10">

            <div>
                <h1 className="text-[#DEE2E6]">
                    Histórico - {services.length} registros
                </h1>
            </div>

            <div className="flex flex-col gap-3">
                {services.map((service) => (
                    <CardHistory
                        key={`${service.Temp}-${service.Data}`}
                        Temp={service.Temp}
                        Date={service.Data}

                    />
                ))}
            </div>

        </div>
    );
}