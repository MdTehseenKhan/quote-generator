import { useState, useEffect } from "react"

import { HashLoader } from "react-spinners"

import "animate.css"
import "./App.css"

const App = () => {
  const [advice, setAdvice] = useState("")
  const [loading, setLoading] = useState(false)

  const getAdvice = async () => {
    setLoading(true)

    const res = await fetch("https://api.adviceslip.com/advice")
    const { slip } = await res.json()
    setAdvice(slip.advice)

    setLoading(false)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="main-container">
      <div className="box">
        <img src="favicon.svg" alt="Advice" className="w-12 mx-auto mb-5" />
        <div className="flex justify-center">
          {loading ? <HashLoader loading /> : <div className="advice text-xl font-semibold">{`"${advice}"`}</div>}
        </div>
        <button className="btn" onClick={() => getAdvice()}>
          Refresh
        </button>
      </div>
    </div>
  )
}

export default App
