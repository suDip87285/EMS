import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-blue-400">
            <h2 className='text-3xl font-semibold'>{data.taskCount.new_task ? data.taskCount.new_task : 0}</h2>
            <h3 className='text-2xl pt-4 font-medium'>New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-2xl pt-4 font-medium'>Completed Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-yellow-400">
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-2xl pt-4 font-medium'>Active Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-green-400">
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-2xl pt-4 font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber