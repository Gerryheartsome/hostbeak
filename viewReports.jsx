import React, { useState } from 'react'
import logo from "../images/Vector.svg";
import arrow from "../images/arrowLeft.svg";
import shuttle from '../images/shuttle.svg';
import dash from '../images/dash.svg';
import wallet from '../images/wallet.svg';
import banking from '../images/banking.svg';
import purchase from '../images/Purchase.svg';
import invoices from '../images/invoices.svg';
import report from '../images/report.svg';
import Group from '../images/Group.svg';
import accounting from '../images/accounting.svg';
import settings from '../images/settings.svg';
import logout from '../images/logout.svg';
import card from '../images/card.svg';
import notification from '../images/notification.svg';
import circle from '../images/circle.svg';
import arrowDown from '../images/arrowDown.svg';
import chat from '../images/chat.svg';
import dropArrow from '../images/dropArrow.svg';
import { Link} from "react-router-dom";

const ViewReports = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    const [menu1, setMenu1] = useState(false);


    const handleClick1 = () => {
        setMenu1(!menu1);
    }

  return (
    <div className='w-full flex'>
       <div className=' lg:w-[340px] h-max bg-[#f9f9f9] py-6'>

            <div className='hidden lg:flex items-center justify-between p-2 bg-white rounded-[30px] shadow-md shadow-black px-6 mx-5 '> 
                <img src={logo} className='lg:w-[40px] w-[700px]' />
                <p className='hidden lg:inline-flex text-[#3A3A3A] text-xl font-normal'>HostBeak</p>
                <img src={arrow} className='lg:w-[9px]' />
            </div>

            {/*  SIDEBAR BEGIN */}

            <div className='mt-6 hidden lg:block'>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={shuttle} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4] pr-14'>Welcome</p>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={dash} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4] pr-14'>Dashboard</p>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={wallet} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Sales</p>
                    <img src={dropArrow}/>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-2 '>
                    <img src={purchase} onClick={handleClick} className={menu ? 'bg-[#081494] duration-200 scale-150 p-1 w-[26px] rounded-full cursor-pointer': 'cursor-pointer w-[26px]'}/>
                    <a className='text-base text-[#C4C4C4] cursor-pointer' onClick={handleClick}>Purchases</a>
                    <img src={dropArrow} onClick={handleClick} />
                </div>
                <div className={menu ? 'flex justify-center flex-col py-2 space-y-5 pl-24 mx-4 duration-300': "duration-300 hidden"}>
                    <Link to='/addbill'>
                    <a className='text-sm text-[#081494]'>Bills</a>
                    </Link>
                    <p className='text-sm text-[#C4C4C4]'>Vendors</p>
                    <p className='text-sm text-[#C4C4C4]'>Products and services</p>
                </div>


                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={accounting} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Accounting</p>
                    <img src={dropArrow}/>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={banking} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Banking</p>
                    <img src={dropArrow}/>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={invoices} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Payroll</p>
                    <img src={dropArrow}/>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-5'>
                    <img src={report} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4] pr-14'>Reports</p>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-2'>
                    <img src={Group} onClick={handleClick1} className={menu1 ? 'bg-[#081494] duration-200 scale-150 px-1 py-2 w-[26px] rounded-full': 'w-[26px]'} />
                    <a className='text-base text-[#C4C4C4] cursor-pointer' onClick={handleClick1}>Analytics</a>
                    <img src={dropArrow} onClick={handleClick1} />
                </div>
                <div className={menu1 ? 'flex justify-center py-2 flex-col pl-24 space-y-5 mx-4 duration-200':"duration-500 hidden"}>
                    <a className='text-base text-[#081494] cursor-pointer'>View Report</a>
                    <p className='text-base text-[#C4C4C4]'>To-Do </p>
                    <p className='text-base text-[#C4C4C4]'>Upload Docs</p>
                    <p className='text-base text-[#C4C4C4]'>Chat</p>
                    <p className='text-base text-[#C4C4C4]'>Schedule</p>
                    <p className='text-base text-[#C4C4C4]'>Message Board</p>
                    <p className='text-base text-[#C4C4C4]'>Make Payments</p>
                    <p className='text-base text-[#C4C4C4]'>Billing</p>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-14'>
                    <img src={settings} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4] pr-14'>Settings</p>
                </div>


                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-14'>
                    <img src={logout} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4] pr-14'>Logout</p>
                </div>


                <button className='flex items-center justify-between p-4 bg-[#081494] space-x-2 rounded-lg  mx-auto'>
                    <img src={card} className='w-[40px]'/>
                    <p className='logTxt text-white text-base font-semibold'>Accept Payments</p>
                </button>
                
            </div>

            {/*  SIDEBAR END */}
        </div>




    <div className='mt-6 w-full'> 
        <div className='flex items-center justify-end lg:pr-40 pr-4 space-x-6 mb-7'>
            <img src={notification} />
            <img src={circle} />
            <p>Ogoluwa</p>
            <img src={arrowDown} />
        </div> 

         {/*  VIEW REPORT BEGIN */}
        <div className='pt-10 lg:pl-20  bg-white rounded-xl h-full'>
            <p className='font-bold text-2xl text-[#272262] mb-4'>View Reports</p>

            <div className='lg:px-10 mt-14 lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#081494]'>February Report <span className='bg-[#D9FCEA] rounded-xl text-xs px-2 uppercase py-[1px] text-[#39DA8A]'>New</span></p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10 lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#304156]'>March 2021 Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>

            <div className='lg:px-10  lg:w-[1100px] border-[1px] border-[#C7CFD6] flex justify-between py-3'>
                <div className='flex space-x-7 items-center justify-start'>
                    <input type='checkbox'/>
                    <p className='text-[#081494]'>February Report</p>
                    <p className='text-[#667085]'>4th, October 2021 11:20am</p>
                </div>

                <div className='flex space-x-9 '>
                    <button className='bg-[#3DB0FF] text-white rounded w-[168px] h-[50px] font-semibold'>View</button>
                    <img src={chat}  />
                </div>
            </div>
           

        </div> 
         {/*  VIEW REPORT END */}
        


    </div>
</div>
  )
}

export default ViewReports