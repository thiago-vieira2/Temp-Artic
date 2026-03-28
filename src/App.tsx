
import { useEffect, useState } from 'react'
import './App.css'
import CardMedium from './Components/Cards/CardMedium'
import Card_temp from './Components/Cards/CardTemp'
import { Grafico } from './Components/Charts/Grafico'
import HistoricoTemp from './Components/Data/HistoricoTemp'
import Header from './Components/Layout/Header'
import API from './Components/Data/API'

type TempAPI = {
  ID: number | string
  Data: string
  hora: string
  temp: number
  "potencia fogão": number
}

function App() {

  const [temp, setTemp] = useState<TempAPI[]>([])
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [media, setMedia] = useState(0)

  useEffect(() => {
    try {
      async function Chamada() {
        let data = await API()
        
        const temperaturas = data.map((item: TempAPI) => item.temp)
        setMin(Math.min(...temperaturas))
        setMax(Math.max(...temperaturas))
        let conta = (max + min) / 2
        setMedia(conta)

      }

      Chamada()
    } catch (error) {
      console.error("Error" + error)
    }
  }, [])


  return (
    <main className='bg-gray-900 min-h-screen flex flex-col gap-10'>
      <Header />

      <div className='flex flex-col items-center gap-10 '>
        <div className="flex gap-15 items-center justify-center">
          <Card_temp />
          <Grafico />
        </div>


        <div className='flex'>
          {/*  {temp.map((temperatura, index) => {

            return (

              <CardMedium
                key={index}
                TempMin={temperatura.TempMin}
                TempMax={temperatura.TempMax}
                TempMedia={temperatura.TempMedia}


              />
            )
          })} */}
        </div>

        <div>
          <HistoricoTemp />
        </div>
      </div>

    </main>


  )
}

export default App
