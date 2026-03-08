
import './App.css'
import Card_Mediun from './assets/Components/Card-mediun'
import Card_temp from './assets/Components/Card-temp'
import { Grafico } from './assets/Components/Grafico'
import Header from './assets/Components/Header'


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
        </div>

      </main>
    </>
  )
}

export default App
