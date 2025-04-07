import React, { useState, useEffect } from 'react'

const Header = (props) => {

   // const [username, setUsername] = useState("Admin");

   // useEffect(() => {
   //     if (props.data) {
   //         setUsername(props.data.firstname);
   //     }
   // }, [props.data]); // Runs only when `data` changes

   const LogOut = () => {
      localStorage.setItem('loggedInUser', '')
      props.changeUser('')
   }
  return (
     <div className="flex items-end justify-between ">
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Username 👋</span></h1>
        <button onClick={LogOut} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-small'>Log Out</button>
     </div>
  )
}

export default Header