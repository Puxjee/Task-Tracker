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
      className='flex flex-col justify-center items-center h-full space-y-4'
      onSubmit={handleSubmit}
    >
      <h1 className='text-xl md:text-2xl font-bold text-[#161616]'>
        Add Your Task
      </h1>

      <div className='w-full px-2 md:px-0 md:w-[80%]'>
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
          className='w-full p-2 md:p-3 text-sm md:text-base rounded-lg border-2 border-[#e0e0e0] focus:border-[#3A49F6] bg-[#333333] text-white focus:outline-none '
        />
      </div>
      <div className='w-[80%] my-4'>
        <label
          htmlFor='deadline'
          className='block mb-2 text-[#161616] font-medium'
        >
          Deadline
        </label>
        <input
          id='deadline'
          type='date'
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
          placeholder='Deadline'
          className='w-full p-2 md:p-3 text-sm md:text-base rounded-lg border-2 border-[#e0e0e0] focus:border-[#3A49F6] bg-[#333333] text-white focus:outline-none '
        />
      </div>

      <div className='flex flex-col md:flex-row md:w-[80%] px-2 gap-2 w-full md:px-0 justify-between'>
        <button
          type='reset'
          className='w-full py-2 md:py-3 px-4 text-sm md:text-base bg-red-100 text-red-700 rounded-lg flex items-center gap-2 hover:bg-red-200 transition-colors font-semibold justify-center'
        >
          Reset{" "}
          <RotateCcw
            size={18}
            className='text-red-700'
          />
        </button>
        <button
          type='submit'
          className='w-full py-2 md:py-3 px-4 text-sm md:text-base bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-2 hover:bg-indigo-200 transition-colors font-semibold justify-center'
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
