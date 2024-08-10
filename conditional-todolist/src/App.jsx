import { useState } from 'react'
import './App.css'
import Todoitems from './component/Todoitems'

function App() {
  const [count, setCount] = useState(0)

  const items = [1,2,3,4,5,6,7,8,9,10]


  return (
    <>
      <h1>ToDo</h1>
      <div> 
        {items.map((i,index)=>
        <Todoitems priority={index === 0 ||index === 2 ? 0 : 1 } number={i} />)}
     </div>
    </>
  )
}

export default App
