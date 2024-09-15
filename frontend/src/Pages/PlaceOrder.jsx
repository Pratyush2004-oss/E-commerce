import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-5 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type='text' className='input w-full max-md:input-sm input-bordered' placeholder='First Name' />
          <input type='text' className='input w-full max-md:input-sm input-bordered' placeholder='Last Name' />
        </div>
        <input type='email' className='input w-full max-md:input-sm input-bordered' placeholder='Email Address' />
        <input type='text' className='input w-full max-md:input-sm input-bordered' placeholder='Street' />
        <div className='flex gap-3'>
          <input type='text' className='input w-full max-md:input-sm input-bordered' placeholder='City' />
          <input type='text' className='input w-full max-md:input-sm input-bordered' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type='number' className='input w-full max-md:input-sm input-bordered' placeholder='ZIP Code' />
          <input type='text' className='input w-full max-md:input-sm input-bordered' placeholder='Country' />
        </div>
        <input type='number' className='input w-full max-md:input-sm input-bordered' placeholder='Phone Number' />
      </div>

      {/* ----------------------------Right Side-------------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12 '>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* ------------------Payment Method Selection---------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='items-center flex gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img src={assets.stripe_logo} alt='stripe' className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('razor-Pay')} className='items-center flex gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razor-Pay' ? 'bg-green-500' : ''}`}></p>
              <img src={assets.razorpay_logo} alt='razorPay' className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('cod')} className='items-center flex gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={() => {
              toast.success('Order placed')
              navigate('/orders')
            }} className='bg-black text-white px-16 py-3 text-sm active:bg-gray-700'>PLACE YOUR ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder