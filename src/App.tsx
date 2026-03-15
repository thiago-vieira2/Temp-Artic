
import { useState } from 'react'
import './App.css'
import CardMedium from './Components/Cards/CardMedium'
import Card_temp from './Components/Cards/CardTemp'
import { Grafico } from './Components/Charts/Grafico'
import HistoricoTemp from './Components/Data/HistoricoTemp'
import Header from './Components/Layout/Header'


function App() {

  const Min = 22.5
  const Max = 60.5
  const Media = (Max+Min)/2

  const [temp, setTemp] = useState([
    { TempMin: Min, TempMax: Max, TempMedia: Media  }

  ])


  return (
    <>
      <main className='bg-gray-900 min-h-screen flex flex-col gap-10'>
        <Header />

        <div className='flex flex-col items-center gap-10 '>
          <div className="flex gap-15 items-center justify-center">
            <Card_temp />
            <Grafico />
          </div>


          <div className='flex'>
            {temp.map((temperatura, index) => {

              return (

                <CardMedium
                  key={index}
                  TempMin={temperatura.TempMin}
                  TempMax={temperatura.TempMax}
                  TempMedia={temperatura.TempMedia}
                  

                />
              )
            })}
          </div>

          <div>
            <HistoricoTemp />
          </div>
        </div>

      </main>
    </>
  )
}

export default App
