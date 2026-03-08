import './index.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2"

export function Grafico() {
    return (
        <div className="flex gap-6 flex-col bg-gray-800 w-[45vw] h-100 rounded-xl border border-gray-600">
            
            <div className='pl-5 pt-5'>
                <p className="font-bold text-gray-400">
                    Grafico de temperatura
                </p>
            </div>

            <div className="w-full h-full p-4">
                <Line
                    data={{
                        labels: ["0°", "7°", "14°", "21°", "28°"],
                        datasets: [
                            {
                                label: "Tempo",
                                data: [20.47, 5.47, 6.47, 7.47, 8.47],
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