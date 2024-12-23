import './App.css'
function App() {

  const changeBackground=(color)=>
  {
    document.body.style.backgroundColor=color;
  }

  return (
    <>
    
     <div className='d-flex flex-column justify-content-center align-items-center gap-5 mt-5 p-5'>
      <button onClick={()=>changeBackground("red")} className='btn btn-danger'>Click the button for RED </button>
      <button onClick={()=>changeBackground("green")} className='btn btn-success'>Click the button for  GREEN  </button>
      <button onClick={()=>changeBackground("blue")} className='btn btn-info'>Click the button for BLUE  </button>
      <button onClick={()=>changeBackground("black")} className='btn btn-dark'>Click the button for  BLACK  </button>

      
     </div>
    </>
  )
}

export default App