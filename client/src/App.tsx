import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
