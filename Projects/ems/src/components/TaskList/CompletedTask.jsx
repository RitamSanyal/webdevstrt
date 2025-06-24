import React from 'react'

const CompletedTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>23 June 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore autem aliquid aliquam quam corporis
            </p>
            <div className='mt-2'>
                <button className='w-full'>Completed</button>
            </div>
        </div>
    )
}

export default CompletedTask