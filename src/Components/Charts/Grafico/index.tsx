
import 'chart.js/auto'
import { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2"
import API from '../../Data/API'

type TempAPI = {
    Temp: number,
    Data: string,
    Hora: string
}

export function Grafico() {

    const [dados, setDados] = useState<TempAPI[]>([])
    

    useEffect( () => {
        try {
            async function carregar () {
                const data : TempAPI[] = await API()
                setDados(data)
                const horas = data.map(item => item.Hora)
                console.log('essse aqui'+horas)


            }

            carregar()

        } catch (error) {
            console.error("erro: "+error)
        }
    }, [])

    const labels = dados.map(item => item.Hora.slice(0, 5)) 
    const temperaturas = dados.map(item => item.Temp)
    const temperaturaAjustado = temperaturas.map(temp => temp / 100)

    return (
        <div className="flex flex-col gap-4 bg-[#343A40] w-150 h-100 rounded-xl">
            
            <div className='px-4 pt-4'>
                <p className="font-bold text-[#DEE2E6] text-sm md:text-base">
                    Grafico de temperatura
                </p>
            </div>

            <div className="w-full h-full px-3 md:px-4 pb-4">
                <Line
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: "Temperatura",
                                data: temperaturaAjustado,
                                borderColor: '#38BDF8',
                                backgroundColor: '#38BDF8',
                                tension: 0.3
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }}
                />
            </div>

        </div>
    )
}