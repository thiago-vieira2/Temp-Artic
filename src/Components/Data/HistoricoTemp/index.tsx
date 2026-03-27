import { useEffect, useState } from "react";
import CardHistory from "../../Cards/CardHistory";
import API from "../API";

type TempData = {
    temp: number;
    date: string;
};

export default function HistoricoTemp() {

    const [services, setServices] = useState<TempData[]>([]);

    useEffect(() => {
        async function carregar() {
            try {
                const data = await API();

                const formatado: TempData[] = data.map((item: any) => ({
                    temp: item.temp,
                    date: item.Data ?? item.date ?? new Date().toISOString()
                }));

                setServices(formatado);

            } catch (error) {
                console.error("Erro ao carregar API:", error);
            }
        }

        carregar();
    }, []);

    function Delete(index: number) {
        setServices(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="bg-gray-800 w-260 h-auto rounded-2xl border border-gray-600 flex flex-col items-start justify-center gap-4 pl-10">

            <div>
                <h1 className="text-gray-500">
                    Histórico - {services.length} registros
                </h1>
            </div>

            <div className="flex flex-col gap-3">
                {services.map((service, index) => (
                    <CardHistory
                        key={`${service.temp}-${service.date}`}
                        Temp={service.temp}
                        Date={service.date}
                        onDelete={() => Delete(index)}
                    />
                ))}
            </div>

        </div>
    );
}