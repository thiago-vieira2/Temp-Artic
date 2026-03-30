
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
  Hora: string
  Temp: number
  PotenciaFogão: number
}

function App() {

  const [, setTemp] = useState<TempAPI[]>([])
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [media, setMedia] = useState(0)

useEffect(() => {
  async function Chamada() {
    try {
      const data = await API()

      const temperaturas = data.map((item: TempAPI) => item.Temp)
      console.log("temp: "+temperaturas)

      const minTemp = Math.min(...temperaturas)
      const maxTemp = Math.max(...temperaturas)
      const mediaTemp = temperaturas.reduce((acc:number, val:number) => acc + val, 0) / temperaturas.length

      setTemp(data)
      setMin(minTemp)
      setMax(maxTemp)
      setMedia(mediaTemp)

    } catch (error) {
      console.error(error)
    }
  }

  Chamada()
}, [])


  return (
    <main className='bg-[#212529] min-h-screen flex flex-col gap-10'>
      <Header />

      <div className='flex flex-col items-center gap-10 '>
        <div className="flex gap-15 items-center justify-center">
          <Card_temp />
          <Grafico />
        </div>


        <div className='flex'>
           

              <CardMedium
                TempMin={min}
                TempMax={max}
                TempMedia={media}
              />
         
        </div>

        <div>
          <HistoricoTemp />
        </div>
      </div>

    </main>


  )
}

export default App
