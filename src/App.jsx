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
    <div className='min-h-screen bg-[#ffffff] flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[50vw] h-[40vw] bg-[#D9D9D9] text-white rounded-lg p-8'>
        {/* Left side with divider */}
        <div className='md:border-r-4 border-b-4 md:border-b-0 border-[#333333] h-full md:pr-4 pb-4 md:pb-0'>
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
