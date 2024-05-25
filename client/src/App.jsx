
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/screen/Cards'
import AddTask from './components/screen/AddTask'
import Navbar from './components/screen/Navbar'

function App() {


  return (

    <BrowserRouter>
    <Navbar />
      <div className='min-h-screen min-w-full bg-slate-700 text-white flex items-center justify-center'>
        
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/add' element={<AddTask />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
