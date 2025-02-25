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
      <h1 className='text-3xl font-bold mb-8 text-[#161616]'>Add Your Task</h1>

      <div className='w-[80%] my-4'>
        <label
          htmlFor='task'
          className='block mb-2 text-[#161616] font-medium'
        >
          Task
        </label>
        <input
          id='task'
          type='text'
          placeholder='Add Task'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className='w-full p-3 rounded-md bg-[#333333] text-white focus:outline-none '
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
          className='bg-red-100 text-red-700 py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-red-200 transition-colors font-semibold'
        >
          Reset{" "}
          <RotateCcw
            size={18}
            className='text-red-700'
          />
        </button>
        <button
          type='submit'
          className='bg-indigo-100 text-indigo-700 py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-indigo-200 transition-colors font-semibold'
        >
          Submit{" "}
          <SendHorizonal
            size={18}
            className='text-indigo-700'
          />
        </button>
      </div>
    </form>
  )
}

export default LeftSide
