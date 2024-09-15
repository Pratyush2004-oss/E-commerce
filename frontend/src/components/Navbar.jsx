import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
    const { setShowSearch,getCardCount } = useContext(ShopContext)
    return (
        <div className='flex items-center gap-3 justify-between py-5 font-medium'>
            <Link to={'/'}>
                <img src={assets.logo} alt='logo' className='w-36' />
            </Link>
            <ul className='hidden md:flex gap-5 text-sm to-gray-700'>
                <NavLink to={'/'} className={'flex flex-col items-center gap-1'}>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/collection'} className={'flex flex-col items-center gap-1'}>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/about'} className={'flex flex-col items-center gap-1'}>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/contact'} className={'flex flex-col items-center gap-1'}>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} onClick={() => setShowSearch(true)} className='w-6 cursor-pointer' alt='search' />
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role='button' className="">
                        <img src={assets.profile_icon} alt='profile' className='w-5 cursor-pointer' />
                    </div>
                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                        <p className='p-1 cursor-pointer hover:text-black'>My Profile</p>
                        <p className='p-1 cursor-pointer hover:text-black'>Orders</p>
                        <p className='p-1 cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
                <Link to={'/cart'} className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-xs bg-black text-white aspect-square rounded-full'>{getCardCount()}</p>
                </Link>
                <div>
                    <div className="drawer drawer-end md:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button ">
                                <img src={assets.menu_icon} className='w-5 cursor-pointer' alt='menu' />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu bg-base-200 text-base-content min-h-full w-44 p-4">
                                {/* Sidebar content here */}
                                <NavLink className={'py-2 my-3 pl-6 border'} to={'/'}>HOME</NavLink>
                                <NavLink className={'py-2 my-3 pl-6 border'} to={'/collection'}>COLLECTION</NavLink>
                                <NavLink className={'py-2 my-3 pl-6 border'} to={'/about'}>ABOUT</NavLink>
                                <NavLink className={'py-2 my-3 pl-6 border'} to={'/contact'}>CONTACT</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar