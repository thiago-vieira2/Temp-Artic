import './index.css'
import 'chart.js/auto'
import { Line } from "react-chartjs-2"

export function Grafico() {
    return (
        <div className="flex flex-col gap-4 bg-gray-800 w-full max-w-sm sm:max-w-xl lg:max-w-2xl h-72 md:h-80 lg:h-96 rounded-xl border border-gray-600">
            
            <div className='px-4 pt-4'>
                <p className="font-bold text-gray-400 text-sm md:text-base">
                    Grafico de temperatura
                </p>
            </div>

            <div className="w-full h-full px-3 md:px-4 pb-4">
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