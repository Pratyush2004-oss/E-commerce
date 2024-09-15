import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800' >Subscribe now and get 20% offf</p>
            <p className='text-gray-400 mt-3'>hjvyvghvyu gougouyvuy  foufgp pgp p iu guolhipg</p>
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center gap-4 w-full sm:w-1/2 mx-auto my-6 border p-3'>
            <input type="email" placeholder="Enter your Email" className="input input-bordered border-black w-full" required />
            <button className='btn btn-ghost' type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetterBox