import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setDescription] = useState('')

  const [task, setTask] = useState('')
 
  const submitHandler = (e) => {
    e.preventDefault();

    setTask({taskTitle, date, category, taskDescription, active:false, newTask:true, completed:false, failed: false})

    const data = userData;

    data.forEach(function (elem){ 
      if(asignTo == elem.firstname) {
        elem.tasks.push(task)
        elem.taskCount.newTask = elem.taskCount.newTask+1
      }
    })
   

    setUserData(data)
    console.log(data)
    setAsignTo('')
    setCategory('')
    setDate('')
    setDescription('')
    setTaskTitle('')

  }

  return (
    <div className='p-4 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
              submitHandler(e)
            }} action="" className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                <div className='text-sm text-gray-300 mb-0.5'>
                <h3>Task Title</h3>
                <input 
                value={taskTitle} 
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }} type="text" placeholder='Make a UI design'
                className='text-sm py-1 px-2 rounded outline-none w-4/5 bg-transparent border-[1px] border-gray-400 mb-4' />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value={date} 
                onChange={(e) => {
                  setDate(e.target.value);
                }} 
                type="date" 
                className='text-sm py-1 px-2 rounded outline-none w-4/5 bg-transparent border-[1px] border-gray-400 mb-4'/>
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                <input 
                value={asignTo} 
                onChange={(e) => {
                  setAsignTo(e.target.value);
                }} 
                type="text" placeholder='Employee Name' 
                className='text-sm py-1 px-2 rounded outline-none w-4/5 bg-transparent border-[1px] border-gray-400 mb-4'/>
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category} 
                onChange={(e) => {
                  setCategory(e.target.value);
                }} 
                type="text" placeholder='design, dev, etc'
                className='text-sm py-1 px-2 rounded outline-none w-4/5 bg-transparent border-[1px] border-gray-400 mb-4' />
                </div>
                </div >
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 md-0.5'>Description</h3>
                <textarea 
                value={taskDescription} 
                onChange={(e) => {
                  setDescription(e.target.value);
                }} 
                name="" id="" col="30" row="10"
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask