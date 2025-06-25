import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

    // console.log(authData.employees);

    return (
        <div className='bg-[#1C1C1C] p-5 rounded mt-5 h-40' id='tasklist'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name  </h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
            </div>
            <div className='h-[80%] overflow-auto'>
                {authData.employees.map((elem, idx) => {
                    return <div key={elem.id || idx} className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='text-lg font-medium w-1/5'>{elem.name}</h2>
                        <h3 className='text-lg font-medium w-1/5 !text-red-400'>{elem.taskStats.newTaskCount}</h3>
                        <h5 className='text-lg font-medium w-1/5 !text-white'>{elem.taskStats.activeCount}</h5>
                        <h5 className='text-lg font-medium w-1/5 !text-blue-400'>{elem.taskStats.completedCount}</h5>
                        <h5 className='text-lg font-medium w-1/5 !text-yellow-400'>{elem.taskStats.failedCount}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask