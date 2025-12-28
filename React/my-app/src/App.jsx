import { useState } from 'react'
import {Route,Routes} from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import TodoList from './components/todolist'
import Counter from './pages/Counter'
import Product from './pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Routes>
        <Route path='/' element={<TodoList/>}/>
        <Route path='counter' element={<Counter/>}/>
        <Route path='product' element={<Product/>}/>
      </Routes>
      
       
       
   
  )
}

export default App
