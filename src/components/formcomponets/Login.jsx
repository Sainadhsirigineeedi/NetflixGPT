import React, { useState } from 'react'
import Header from '../Header'

const Login = () => {
  
  const [isLogin,setIslogin]=useState(true)
  const handelForm=()=>{
    setIslogin(!isLogin)
  }
  return (
 
    <div>
    <Header></Header>
  
  <div className="flex justify-center items-center  bg-gray-900
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg')] min-h-screen bg-cover bg-center">
   {
    isLogin?<div className="card bg-gray-900 w-96 shadow-xl">
    <div className="card-body">
     <h1 className='text-white ml-2 font-bold'>Sign in</h1>
     
      <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs mt-4" /><br />
      <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs mt-4" /><br />
      <button className="btn btn-outline btn-success mt-4">singn in</button>
      <p className='text-white py-2 hover:text-green-500 cursor-pointer' onClick={handelForm}>New to Netflix?Sign up</p>
    </div>
   </div>:<div className="card bg-gray-700 w-96 shadow-xl">
   <div className="card-body">
     <h1 className='text-white ml-2 font-bold'>Sign UP</h1>
     <input type="text" placeholder="User name" className="input input-bordered w-full max-w-xs mt-4" /><br />
     <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs mt-4" /><br />
     <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs mt-4" /><br />
     <input type="text" placeholder="confirm password" className="input input-bordered w-full max-w-xs mt-4" /><br />
      <button className="btn btn-outline btn-success mt-4">singn up</button>
      <p className='text-white py-2 hover:text-green-500 cursor-pointer' onClick={handelForm}>Signin</p>
    </div>
   </div>
   }
  
 </div>

    </div>

  
 
  
  )
}

export default Login