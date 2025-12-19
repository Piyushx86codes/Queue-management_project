
import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm';

function App() {
  
  const[queue,setQueue] = useState([]);

  const addtoQueue =(customer)=>{

  }

  const updateStatus = (is,newStatus)=>{

  }

  const removefromQueue = (id)=>{

  }

  return (
    <div className='app'>
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your Customers Effeiciently</p>
      </header>
      <main>
        <QueueForm onAdd = {addtoQueue}/>
        <h1>Queue display</h1>
      </main>
    </div>
  )
}

export default App
