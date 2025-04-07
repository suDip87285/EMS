import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className="text-sm  mt-2">
              {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>mark as Failed</button>
            </div>
    </div>
  )
}

export default AcceptTask