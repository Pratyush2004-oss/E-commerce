import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    }, [location])

    return showSearch && visible && (
        <div className='border-b border-t bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border w-72 sm:w-96 border-gray-400 my-5 mx-3 rounded-full relative'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='input px-5 py-2 w-full rounded-full input-sm flex-1 outline-none border-none bg-inherit text-sm' type='text' placeholder='Search' />
                <img src={assets.search_icon} alt='' className='w-5 absolute right-2 bottom-1.5' />
            </div>
            <img src={assets.cross_icon} alt='' className='inline w-3 cursor-pointer' onClick={() => setShowSearch(false)} />
        </div>
    )
}

export default Searchbar