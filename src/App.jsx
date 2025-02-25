import React from "react"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"

const App = () => {
  return (
    <div className='min-h-screen bg-[#ffffff] flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[50vw] h-[40vw] bg-[#D9D9D9] text-white rounded-lg p-8'>
        {/* Left side with divider */}
        <div className='md:border-r-4 border-b-4 md:border-b-0 border-[#333333] h-full md:mr-4 pb-4 md:pb-0'>
          <LeftSide />
        </div>

        {/* Right side */}
        <div className='h-full md:mx-4 my-4 md:my-0'>
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default App
