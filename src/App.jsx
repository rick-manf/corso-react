import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="grid grid-cols-4 gap-10">
      <Card 
        title = "Road" 
        imgURL = "https://images.unsplash.com/photo-1771533680002-c063a96c95a4?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </Card>
      
      <Card 
        title = "Breakfast" 
        imgURL = "https://plus.unsplash.com/premium_photo-1676923901681-2711aae37105?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </Card>
      
      <Card
        title = "Street"
        imgURL = "https://images.unsplash.com/photo-1771600093904-3039b50203d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </Card>
      
      <Card
        title = "Vibe"
        imgURL = "https://plus.unsplash.com/premium_photo-1771645903251-eba25bb877c2?q=80&w=841&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </Card>
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
