import { Check, CircleDashed, Trash } from "lucide-react"
import React from "react"

const RightSide = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const taskStatus = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <ul className='h-full min-h-[200px] pr-4 overflow-y-auto list-disc pl-5 text-gray-700 text-l font-semibold'>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center justify-between border-b border-gray-300 py-2 mb-3 ${
            task.completed
              ? "bg-green-900 text-white hover:bg-green-500"
              : "bg-sky-900 text-white hover:bg-sky-500 "
          } p-3 rounded-lg hover:cursor-pointer transition-colors`}
          onClick={() => taskStatus(task.id)}
        >
          <div className='flex flex-col gap-1'>
            <span className={`${task.completed ? "line-through" : ""}`}>
              {task.text}{" "}
            </span>
            <p className='italic text-xs'>Deadline: {task.deadline}</p>
          </div>

          <div className='flex items-center justify-between gap-3'>
            {task.completed ? (
              <CircleDashed
                size={24}
                className='text-sky-400'
              />
            ) : (
              <Check
                size={24}
                className='text-green-400'
              />
            )}

            <Trash
              size={24}
              className='text-red-400 hover:cursor-pointer'
              onClick={(e) => {
                e.stopPropagation()
                deleteTask(task.id)
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default RightSide
