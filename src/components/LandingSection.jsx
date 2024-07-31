import { useState } from "react"

function LandingSection() {
  const [isShown, setIsShown] = useState(false)

  function handleClick() {
    setIsShown(!isShown)
    
    if (isShown) {
      alert("Hello! You clicked")
    }
    
  }

  return (
    <div className="mt-5 bg-picture ">
       <h1 className="text-9xl font-bold  text-center text-white pt-72 ">We ARE HIRING</h1>
       <h1 className="text-2xl font-bold text-white text-center w-8/12 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</h1>
       <a className="flex justify-center text-center"><button type="button" onClick={handleClick}
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg mt-10  ">Learn More</button></a>
    </div>
  )
}

export default LandingSection