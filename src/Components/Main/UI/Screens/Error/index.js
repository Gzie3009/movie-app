import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <div className='w-screen h-[60vh] bg-rose-200 text-3xl'>
            <div>Error , Go back to <Link path="/" className='text-blue underline'>Home</Link></div>
        </div>
    </>
  )
}

export default Error