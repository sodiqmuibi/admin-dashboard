import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
const SideBar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext()
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg m-2"
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"

  const removeSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link 
              to='/' 
              onClick={() => removeSideBar()}
              className='mt-4 flex text-xl gap-3 font-extrabold text-slate-900 tracking-tight dark:text-white items-center ml-3'>
                <SiShopware /><span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button 
                type='button'
                onClick={()=> setActiveMenu((prevState) => !prevState)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 mt-4 uppercase m-3'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink 
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => removeSideBar()}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                    style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})}>
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SideBar
