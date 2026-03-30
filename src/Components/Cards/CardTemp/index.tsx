import { useEffect, useState } from "react"
import { FaTemperatureLow } from "react-icons/fa"
import API from "../../Data/API"

export default function Card_temp() {

    const [, setDados] = useState([])
    const [temp, setTemp] = useState(null)

    useEffect(() => {
        async function carregar() {
            try {
                const data = await API()
                console.log(data)

                setDados(data)

                
                const ultimo = data[data.length - 1]

                setTemp(ultimo.Temp)
                console.log(temp)

            } catch (error) {
                console.error(error)
            }
        }

        carregar() 
    }, [])

    if (temp === null) {
        return <p>Carregando...</p>
    }

    let TempColor = ''
    let TempText = ''

    if (temp < 25) {
        TempColor = "text-blue-400"
        TempText = "Amena"
    }
    else if (temp < 160) {
        TempColor = "text-amber-400"
        TempText = "Media"
    }
    else if (temp < 200) {
        TempColor = "text-red-400"
        TempText = "Quente"
    }
    else {
        TempColor = "text-red-800"
        TempText = "Chernobyl"
    }

    return (
        <div className="bg-gray-800 w-130 h-100 max-w-sm rounded-2xl border border-gray-600 flex items-center justify-center">

            <div className="flex flex-col gap-3 items-center text-center">

                <p className='text-gray-500 text-sm md:text-base'>
                    Leitura atual
                </p>

                <FaTemperatureLow className={`${TempColor} text-4xl md:text-5xl lg:text-6xl`} />

                <h1 className={`text-2xl md:text-3xl lg:text-4xl ${TempColor}`}>
                    {temp} <span className='text-lg md:text-xl lg:text-2xl'>°C</span>
                </h1>

                <p className={`${TempColor} text-sm md:text-base`}>
                    {TempText}
                </p>

            </div>

        </div>
    )
}