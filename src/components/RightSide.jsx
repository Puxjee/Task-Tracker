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
    <div className='h-full flex flex-col'>
      <h2 className='text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#161616] sticky top-0 bg-white pt-2 pb-2 md:pb-4'>
        Your Tasks ({tasks.length})
      </h2>
      {/*w9eft lena*/}
      <ul className='h-full min-h-[200px] pr-4 overflow-y-auto list-disc pl-5 text-gray-700 text-l font-semibold'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between border-b border-gray-200 py-2 mb-3 ${
              task.completed
                ? "bg-green-100 hover:bg-green-200"
                : "bg-stone-200 hover:bg-gray-50"
            } p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group`}
            onClick={() => taskStatus(task.id)}
          >
            <div className='flex flex-col gap-1'>
              <span
                className={`text-base ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {task.text}{" "}
              </span>
              <p className='text-xs text-gray-500 mt-1 italic'>
                Deadline: {task.deadline}
              </p>
            </div>

            <div className='flex items-center justify-between gap-3'>
              {task.completed ? (
                <Check
                  size={24}
                  className='text-green-400'
                />
              ) : (
                <CircleDashed
                  size={24}
                  className='text-sky-400'
                />
              )}

              <Trash
                size={24}
                className='text-slate-400 hover:text-red-500 transition-colors group-hover:scale-110 hover:rotate-6'
                onClick={(e) => {
                  e.stopPropagation()
                  deleteTask(task.id)
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RightSide
