import { menuItems } from './data/db'

function App() {

  return (
    <>
    <header className=' bg-teal-400 py-5'>
      <h1 className=' text-center text-4xl font-black'>Calculadora de Propinas y Consumo</h1>
    </header>
    <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
      <div>
        <h1>menu</h1>
      </div>
      <div>
        <h2>consumo</h2>
      </div>

    </main>
    </>
  )
}

export default App
