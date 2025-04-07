import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail]  = useState('') 
    const [password, setPassword]  = useState('') 

      const submitHandler = (e) => {
        e.preventDefault();
        console.log("Hello guyssss, Form Submitted")
        handleLogin(email, password)
        setEmail('')
        setPassword('')
      } 

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                onChange={(e) => {
                    setEmail(e.target.value)
                }} 
                value= {email}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email'/>
                <input 
                onChange={(e) => {
                    setPassword(e.target.value)
                }} 
                value= {password}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-4' type="password" placeholder='Enter Password'/>
                <button className='w-full mt-8 text-white outline-none border-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login