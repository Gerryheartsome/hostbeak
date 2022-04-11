import React from 'react'
import { Link} from "react-router-dom";



const Login = () => {
  return (
    <div className="w-full">
        <div className="lg:flex w-full h-screen p-2">
            <div className='logImg w-full h-full'>
                <p className='font-semibold text-3xl text-white absolute left-[20%] translate-x-[-20%] logTxt bottom-20'>
                    Building exceptional <br /> services with Back Office<br />  Support and Business<br />  Perfomance
                </p>
            </div>

            <div className='lg:p-20 p-2 w-full h-full'>
                <h1 className='text-[#272262] text-left font-bold text-3xl mb-4'>Create Account</h1>
                <p className='text-[#282C4099] w-full text-xl'> Build an exceptional business</p>

                <form className='pt-10 lg:pr-10'>
                    <div className='flex space-x-5 items-center'>
                        <div className='w-full'>
                            <label className=' mb-6 text-sm text-[#82869A] font-semibold'>First Name</label>
                            <input value='Ogoluwa'  type='text' className='text-[#272262] text-lg  py-3 w-full outline-none border-b-2 border-b-[#EBEBEB] bg-transparent focus:border-[#272262] duration-300' />
                        </div>


                        <div className='w-full'>
                            <label className='mb-6 text-sm text-[#82869A] font-semibold'>Last Name</label>
                            <input placeholder='Enter Your Last Name' type='text' className='py-3 w-full outline-none border-b-2 border-b-[#EBEBEB] bg-transparent focus:border-[#272262] duration-300' />
                        </div>
                    </div>

                    <div className='w-full mt-5'>
                        <label className='mb-6 text-sm text-[#82869A] font-semibold'>Phone Number</label>
                        <input placeholder='Enter Your Phone Number' type='text' className='py-3 w-full outline-none border-b-2 border-b-[#EBEBEB] bg-transparent focus:border-[#272262] duration-300' />
                    </div>

                    <div className='w-full mt-5'>
                        <label className='mb-6 text-sm text-[#82869A] font-semibold'>Email Address</label>
                        <input placeholder='Enter Your email' type='text' className='py-3 w-full outline-none border-b-2 border-b-[#EBEBEB] bg-transparent focus:border-[#272262] duration-300' />
                    </div>


                    <div className='w-full mt-5'>
                        <label className='mb-6 text-sm text-[#82869A] font-semibold'>Password</label>
                        <input placeholder='Enter your password' type='text' className='py-3 w-full outline-none border-b-2 border-b-[#EBEBEB] bg-transparent focus:border-[#272262] duration-300' />
                    </div>

                    <div className='flex items-center justify-between w-full mt-7 mb-7'>
                        <div className=' flex items-center space-x-3'>
                            <input type='checkbox' style={{width:"20px", height:'20px'}} className='rounded-md'/>
                            <p className='font-semibold text-base text-[#82869A99]'>Remember me</p>
                        </div>

                        <a href='#x' className='text-base text-[#3DB0FF] font-semibold'> Forgot Password</a>
                    </div>
                    <Link to='/addbill'>
                     <button className=' bg-[#3DB0FF] rounded w-full h-full p-4 text-center font-semibold text-white text-lg'>Sign Up</button>
                    </Link>
                    <div className='text-center mt-3'>
                        <a href='#x' className='text-base text-[#272262] font-semibold'> Got an account?  <span className='text-[#3DB0FF]'>    Sign in</span></a>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login