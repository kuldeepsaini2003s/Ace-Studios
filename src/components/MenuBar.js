import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuBar = ({setHandlebtn}) => {

  function refreshPage(){
    window.location.reload();
  }

  window.addEventListener("scroll",()=>{
    if(window.scrollY>70){
      setHandlebtn(false)
    }
  })

  return (
    <div className={`menu-bar ${setHandlebtn ? 'slide-in' : ''}`}>
    <div className='px-20 py-5 bg-white shadow-lg w-[27rem] rounded-xl h-[100vh] ms:h-full'>
                      {/* Go back */}
        <div className='flex items-center gap-x-10 gap-y-2 mb-8'>
        <Link to={"contact"}>
        <button className="mr-6 text-base bg-purple rounded-3xl px-4 py-2 text-white">Connect with us</button>
        </Link>
        <div onClick={()=>setHandlebtn(false)}><i class="fa-solid fa-xmark"></i></div>
        </div>
                      {/* Nagivate */}
        <div className='flex flex-col gap-y-4 mb-8'>
            <Link to={"/"}>
            <h1 className='text-black text-xl' onClick={setHandlebtn(true)} >Home</h1>
            </Link>
           
            <Link to={"/service"}>
            <h1 className='text-black text-xl'>Service</h1>
            </Link>
           
            <Link to={"/contact"}>
            <h1 className='text-black text-xl'>Contact us</h1>
            </Link>
           
            <Link to={"/terms"}>
            <h1 className='text-black text-xl'>Terms & Conditions</h1>
            </Link>

            <Link to={"/privacy"}>
            <h1 className='text-black text-xl'>Privacy</h1>
            </Link>


        </div>

                        {/* social media handle */}
        <div>
            <p>Follow us on</p>
            <div className='flex gap-x-4 text-2xl mt-4'>
            <a href='https://www.instagram.com/finick.xyz/'><div className='text-purple bg-lightgray  h-10 w-12 text-center rounded-xl'><i class="fa-brands fa-instagram text-base"></i></div></a>
            
            <a href='https://www.linkedin.com/company/finick/'><div className='text-purple bg-lightgray  h-10 w-12 text-center rounded-xl'><i class="fa-brands fa-linkedin-in text-base"></i></div></a>
            <a href='https://twitter.com/Finick_xyz'><div className='text-purple bg-lightgray  h-10 w-12 text-center rounded-xl'><i class="fa-brands fa-twitter text-base"></i></div></a>
            
            </div>
        </div>
      </div>
      </div>
  )
}

export default MenuBar