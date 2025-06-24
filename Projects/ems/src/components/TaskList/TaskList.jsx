import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            <AcceptTask data={data} />
            {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>23 June 2025</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore autem aliquid aliquam quam corporis ipsum eum ullam dignissimos similique, earum harum dolores vel placeat possimus, magni quo, nisi voluptates!
                </p>
            </div> */}
            <NewTask data={data} />
            {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>23 June 2025</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore autem aliquid aliquam quam corporis ipsum eum ullam dignissimos similique, earum harum dolores vel placeat possimus, magni quo, nisi voluptates!
                </p>
            </div> */}
            <CompletedTask data={data} />
            {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>23 June 2025</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore autem aliquid aliquam quam corporis ipsum eum ullam dignissimos similique, earum harum dolores vel placeat possimus, magni quo, nisi voluptates!
                </p>
            </div> */}
            <FailedTask data={data} />
            {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>23 June 2025</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore autem aliquid aliquam quam corporis ipsum eum ullam dignissimos similique, earum harum dolores vel placeat possimus, magni quo, nisi voluptates!
                </p>
            </div> */}
        </div>
    )
}
export default TaskList