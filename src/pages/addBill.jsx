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
import upload from '../images/upload.svg';
import write from '../images/write.svg';
import input from '../images/Input.svg';
import trash from '../images/trash.png';
import dropArrow from '../images/dropArrow.svg';
import { Link} from "react-router-dom";


const AddBill = () => {

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
        <div className=' lg:w-[310px] h-max bg-[#f9f9f9] py-6'>

            <div className='hidden lg:flex items-center justify-between p-2 bg-white rounded-[30px] shadow-md shadow-black px-6 mx-5 '> 
                <img src={logo} className='lg:w-[40px] w-[700px]' />
                <p className='hidden lg:inline-flex text-[#3A3A3A] text-xl font-normal'>HostBeak</p>
                <img src={arrow} className='lg:w-[9px]' />
            </div>

            {/*  SIDEBAR BEGIN */}

            <div className='mt-6 hidden lg:block'>
                <div className='flex items-center justify-between p-3 px-12 mx-5 mb-5'>
                    <img src={shuttle} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Welcome</p>
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-5'>
                    <img src={dash} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Dashboard</p>
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-5'>
                    <img src={wallet} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Sales</p>
                    <img src={dropArrow} />
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-2 '>
                    <img src={purchase} onClick={handleClick} className={menu ? 'bg-[#081494] duration-200 scale-150 p-1 w-[26px] rounded-full': 'w-[26px]'}/>
                    <a className='text-base text-[#C4C4C4] cursor-pointer' onClick={handleClick}>Purchases</a>
                    <img src={dropArrow} onClick={handleClick} />
                </div>
                <div className={menu ? 'flex justify-center flex-col pl-20 mx-4 duration-200':"h-0 opacity-0"}>
                    <p className='text-sm text-[#081494]'>Bills</p>
                    <p className='text-sm text-[#C4C4C4]'>Vendors</p>
                    <p className='text-sm text-[#C4C4C4]'>Products and services</p>
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-5'>
                    <img src={accounting} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Accounting</p>
                    <img src={dropArrow} />
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-5'>
                    <img src={banking} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Banking</p>
                    <img src={dropArrow} />
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-5'>
                    <img src={invoices} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Payroll</p>
                    <img src={dropArrow} />
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-5'>
                    <img src={report} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Reports</p>
                </div>
                <div className='flex items-center justify-between p-3 px-9 mx-3 mb-2'>
                    <img src={Group} onClick={handleClick1} className={menu1 ? 'bg-[#081494] duration-200 scale-150 p-1 w-[26px] rounded-full': 'w-[26px]'} />
                    <a className='text-base text-[#C4C4C4] cursor-pointer' onClick={handleClick1}>Analytics</a>
                    <img src={dropArrow} onClick={handleClick1} />
                </div>
                <div className={menu1 ? 'flex justify-center flex-col pl-20 mx-4 duration-200':"h-0 opacity-0"}>
                    <Link to='/viewreport'>
                    <a className='text-sm text-[#081494]'>View Report</a>
                    </Link>
                    <p className='text-sm text-[#C4C4C4]'>To-Do </p>
                    <p className='text-sm text-[#C4C4C4]'>Upload Docs</p>
                    <p className='text-sm text-[#C4C4C4]'>Chat</p>
                    <p className='text-sm text-[#C4C4C4]'>Schedule</p>
                    <p className='text-sm text-[#C4C4C4]'>Message Board</p>
                    <p className='text-sm text-[#C4C4C4]'>Make Payments</p>
                    <p className='text-sm text-[#C4C4C4]'>Billing</p>
                </div>
                <div className='flex items-center justify-between p-3 px-10 mx-5 mb-14'>
                    <img src={settings} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Settings</p>
                </div>


                <div className='flex items-center justify-between p-3 px-12 mx-5 mb-14'>
                    <img src={logout} className='w-[27px]' />
                    <p className='text-base text-[#C4C4C4]'>Logout</p>
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

            <div className='pt-10 lg:pl-20  bg-white rounded-xl h-[800px]'>
                <p className='font-bold text-2xl text-[#272262] mb-4'>Add Bill</p>

                {/* SELECT OPTIONS FORM BEGIN */}

                <div className='flex  items-center justify-between w-[870px] mb-5'>
                    <div className=''>
                        <p className='text-[#272262] font-semibold text-base mb-1'>Vendor</p>
                        <select className='border-[1px] border-[#C7CFD6] w-[200px] p-2 outline-none text-sm'>
                            <option>Choose</option>
                        </select>
                    </div>

                    <div className=''>
                        <p className='text-[#272262] font-semibold text-base mb-1'>Date</p>
                        <input type='date' className='border-[1px] border-[#C7CFD6] w-[200px] p-2 outline-none text-sm'/>
                    </div>

                    <div className=''>
                        <p className='text-[#272262] font-semibold text-base mb-1'>Bill#</p>
                        <input type='text' className='border-[1px] border-[#C7CFD6] w-[240px] p-2 outline-none text-sm'/>
                    </div>
                </div>


                <div className='flex  items-center justify-between w-[870px] mb-[-1]'>
                    <div className='mt-[-90px]'>
                        <p className='text-[#272262]  font-semibold text-base mb-1'>Currency</p>
                        <select className='border-[1px] border-[#C7CFD6] w-[200px] p-2 outline-none text-sm '>
                            <option>USD U.S-dollar</option>
                        </select>
                    </div>

                    <div className='mt-[-90px]'>
                        <p className='text-[#272262] font-semibold text-base mb-1'>Due Date</p>
                        <input type='date' style={{color:"#C7CFD6"}} className='border-[1px] border-[#C7CFD6] text-[#C7CFD6]  w-[200px] p-2 outline-none text-sm'/>
                    </div>

                    <div className=''>
                        <p className='text-[#272262] font-semibold text-base mb-1'>Notes</p>
                        <input type='text' className='border-[1px] border-[#C7CFD6] w-[240px] h-[140px] p-2 outline-none text-sm'/>
                    </div>
                </div>


                <div className='flex  items-center justify-between w-[513px] mb-5'>
                    <div className='mt-[-70px]'>
                        <p className='text-[#272262]  font-semibold text-base mb-1'>Upload copy of Bill</p>
                        <button className='border-[1px] border-[#C7CFD6] w-[200px] p-1 outline-none text-sm overflow-hidden relative'>
                            <div className=' absolute left-2 top-2 w-[180px] flex items-center justify-between'>
                                <p className='text-sm text-[#727E8C]'>Upload File</p>
                                <img src={upload}   className='w-4'/>
                            </div>
                            <input type='file' className='border-[1px] appearance-none opacity-0 border-[#C7CFD6] w-[180px]  outline-none text-sm'/>
                        </button>
                    </div>

                    <div className='mt-[-70px]'>
                        <p className='text-[#272262] font-semibold text-base mb-1'>P.O/S.O</p>
                        <input type='text' className='border-[1px] border-[#C7CFD6] w-[200px] p-2 outline-none text-sm'/>
                    </div>
                </div>

                {/* SELECT OPTIONS FORM END */}


                {/*  TABLE BEGIN */}
                <div className='lg:px-20 mt-20 lg:w-[1100px] border-[1px]  border-[#C7CFD6]'>
                    <table className='w-full tables '>
                        <thead className='border-b-[1px] pl-3  border-[#98A2B3]'>
                            <tr className='' >
                                <th className='text-left pl-3 pt-6 pb-4 text-[#304156]'>item</th>
                                <th className='text-left pt-6 pb-4 text-[#304156]'>Expense category</th>
                                <th className='text-left pt-6 pb-4 text-[#304156]'>Description</th>
                                <th className='text-left pt-6 pb-4 text-[#304156]'>Qty</th>
                                <th className='text-left pt-6 pb-4 text-[#304156]'>Price</th>
                                <th className='text-left pt-6 pb-4 text-[#304156]'>Tax</th>
                                <th className='text-left pt-6 pb-4 text-[#304156]'>Amount</th>
                            </tr>
                        </thead>

                        <tbody className='border-b-[1px] border-[#98A2B3]'>
                            <tr>
                                <td>
                                    <select className='border-[1px] border-[#C7CFD6] w-[150px] my-5 mx-2 p-2 mb-5 outline-none text-sm '>
                                        <option>Choose</option>
                                    </select>
                                </td>
                                <td>
                                    <select className='border-[1px] border-[#C7CFD6] w-[200px] my-5 mx-2 p-2 mb-5 outline-none text-sm '>
                                        <option>Choose</option>
                                    </select>
                                </td>
                                <td>
                                    <input type='text'  className='border-[1px] border-[#C7CFD6] my-5 w-full p-2 mb-5 outline-none text-sm'/>
                                </td>
                                <td>
                                    <input type='text' value='1' className='border-[1px] border-[#C7CFD6] my-5 w-[50px] mb-5 mx-2 p-2 outline-none text-sm'/>
                                </td>
                                <td >
                                    <input type='text' value='0' className='border-[1px] border-[#C7CFD6] my-5 w-[100px] mb-5 mx-2 p-2 outline-none text-sm'/>
                                </td>

                                <td className='flex items-center mt-4 mb-4'>
                                    <input type='text' className='border-[1px] border-[#C7CFD6]  w-[100px] mx-2 mt-1   p-2  outline-none text-sm'/>
                                    <div className='flex flex-col'>
                                        <img src={write} className="w-8 cursor-pointer" />
                                        <img src={input} className="w-8 cursor-pointer" />
                                    </div>
                                </td>

                                <td>
                                    <p className='font-medium text-[#1D2939] mx-4 my-5 mb-4 text-left'>N0.00</p>
                                </td>
                                <td>
                                    <img src={trash} className='w-10 cursor-pointer my-5 mb-4' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/*  TABLE END */}


                        <div className='flex flex-col w-[900px] items-end py-5'>
                            <div className='flex items-center w-40 justify-between'>
                                <p className='font-medium text-[#1D2939]'>Subtotal:</p>
                                <p className='font-medium text-[#1D2939]'>N0.00</p>
                            </div>

                            <div className='flex items-center w-40 justify-between'>
                                <p className='font-medium text-[#1D2939]'>Total(NGN):</p>
                                <p className='font-medium text-[#1D2939]'>N0.00</p>
                            </div>
                        </div>
                </div>



                <div className='flex w-full items-center justify-end pr-36 mt-5 space-x-4'>
                    <button className='border-2 rounded  border-[#C7CFD6] text-[#1D2939] font-semibold p-3 w-32'>Cancel</button>
                    <button className='border-2 rounded border-[#3DB0FF] text-white bg-[#3DB0FF] font-semibold p-3 w-32'>Save</button>
                </div>

            </div> 

            


        </div>
    </div>
  )
}

export default AddBill