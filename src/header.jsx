import { useEffect } from "react"
import { useState } from "react"

const Header = () => {
  const names = ["Olivier", "Hazem"]

  const [name, setName] = useState(names[Math.round(Math.random())])
  const [test, setTest] = useState(false)

  useEffect(() => {
    //on Mount
    console.log("EFFECT !")
    const interval = setInterval(() => {
      setName(names[Math.round(Math.random())])
    }, 1000);

    return () => {
      // On Unmount
      console.log("Unmounting")
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <h1>Hello {name} !</h1>
      <h2>{name === "Hazem" ? "React" : "Vue"} is so cool...</h2>
    </>
  )
}

export default Header