import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
        <>
        <div className="text-8xl">
            RT
        </div>
        <div className="text-8xl italic text-center">
            what TEst is this
        </div>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            TEst is {count}x stupid
            </button>
            <button onClick={() => navigate('/')}>
                Click here to go to wonderful place
            </button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        </>
  )
}

export { 
    Test
}