import { RotateCcw, SendHorizonal } from "lucide-react"
import React, { useState } from "react"

const LeftSide = ({ addTask }) => {
  const [taskText, setTaskText] = useState("")
  const [taskDeadline, setTaskDeadline] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskText || !taskDeadline) {
      alert("Please fill in all fields")
      return
    } else {
      addTask(taskText, taskDeadline)
      setTaskText("")
      setTaskDeadline("")
    }
  }
  return (
    <form
      className='flex flex-col justify-center items-center h-full'
      onSubmit={handleSubmit}
    >
      <h1 className='text-2xl font-bold mb-8 text-[#161616]'>Add Your Task</h1>

      <div className='w-[80%] my-4'>
        <input
          id='task'
          type='text'
          placeholder='Add Task'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className='w-full p-3 rounded-md bg-[#333333] text-white focus:outline-none'
        />
      </div>
      <div className='w-[80%] my-4'>
        <input
          id='deadline'
          type='date'
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
          placeholder='Deadline'
          className='w-full p-3 rounded-md bg-[#333333] text-white focus:outline-none'
        />
      </div>

      <div className='flex flex-col md:flex-row gap-4 mt-8 w-[80%] justify-between'>
        <button
          type='reset'
          className='bg-[#EE5353] py-4 px-10 rounded-lg flex items-center justify-between gap-2 hover:bg-[#FF6B6B] transition-colors'
        >
          Reset{" "}
          <RotateCcw
            size={20}
            className='text-white'
          />
        </button>
        <button
          type='submit'
          className='bg-[#3A49F6] py-4 px-10 rounded-lg flex items-center justify-between gap-2 hover:bg-[#4D5BFF] transition-colors'
        >
          Submit{" "}
          <SendHorizonal
            size={20}
            className='text-white'
          />
        </button>
      </div>
    </form>
  )
}

export default LeftSide
