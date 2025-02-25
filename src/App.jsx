import React from "react"
import { useState } from "react"

const App = () => {
  const [taskText, setTaskText] = useState("")
  const addTask = () => {
    console.log("Add Task: ", taskText)
  }
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>Task Tracker</h1>
        <div className='flex mb-4'>
          <input
            type='text'
            placeholder='Enter new task'
            className='flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-blue-400'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
