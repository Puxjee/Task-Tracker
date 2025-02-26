import React, { useState } from "react"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText, taskDeadline) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      deadline: taskDeadline,
      completed: false,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <div className='min-h-screen bg-[#f0f2f5] flex items-center justify-center p-2 sm:p-4 animate-fade-in'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full md:min-h-[60vh] max-h-screen md:max-h-[80vh] md:w-[90%] lg:w-[70%] xl:w-[50%] md:h-[60vh] max-w-[1200px] bg-white shadow-xl rounded-lg md:rounded-xl p-4 md:p-8'>
        {/* Left side with divider */}
        <div className='md:border-r-4 border-b-2 md:border-b-0 border-[#e0e0e0] h-full md:pr-4 pb-4 md:pb-0'>
          <LeftSide addTask={addTask} />
        </div>

        {/* Right side */}
        <div className='h-full md:pl-4 overflow-hidden'>
          <RightSide
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </div>
    </div>
  )
}

export default App
