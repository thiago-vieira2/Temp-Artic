
import './App.css'
import Card_Mediun from './Components/Cards/CardMedium'
import Card_temp from './Components/Cards/CardTemp'
import { Grafico } from './Components/Charts/Grafico'
import HistoricoTemp from './Components/Data/HistoricoTemp'
import Header from './Components/Layout/Header'


function App() {


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
            <Card_Mediun />
          </div>

          <div>
            <HistoricoTemp/>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
