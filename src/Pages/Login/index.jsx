import React from 'react'
import './style.css'

const index = () => {
  return (
    <div className='w-full h-full bg-slate-600'>
        <div className='justify-center flex flex-row gap-10'>
          <div>
            <img src="src\img\woman.jpg" alt="Woman photo" className='w-96 h-auto' />
          </div>

          <div className='flex flex-col text-lg'>
            <div className='flex justify-center items-center'>
              <img src='src\img\logoMaker.jpg' alt="Logo Maker" className='w-28 h-28 rounded-r-full' />
            </div>

            <div className='flex flex-col'>
              <div>
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='send email...' />
              </div>

              <div>
                <label htmlFor="">Password:</label>
                <input type="password" placeholder='send password...' />
              </div>
              
              <div className='flex flex-row gap-20'>
                <input type="radio" />
                <p>Remember Me</p>
                <button>Log In</button>
              </div>

              <a href="#">Lost your Password?</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default index