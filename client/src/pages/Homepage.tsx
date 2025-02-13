import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'

function Homepage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
    <div className="scroll-watcher"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="temp"></div>
    <div className="flex bg-white justify-center">
      <div className="text-8xl">
        welcome to ibis
      </div>
    </div>
      <div className="text-8xl italic text-center">
        what fish is this
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          amelia is {count}x stupid
        </button>
        <button onClick={() => {
            navigate("/test");
        }}>
            Click here to go to wonderful place
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Homepage
