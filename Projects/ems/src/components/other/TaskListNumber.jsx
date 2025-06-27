import PropTypes from 'prop-types';

const TaskListNumber = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-2xl w-[45%] py-6 px-9 bg-red-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.newTaskCount}</h2>
                <h3 className='txt-xl font-medium'>New</h3>
            </div>
            <div className='rounded-2xl w-[45%] py-6 px-9 bg-blue-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.completedCount}</h2>
                <h3 className='txt-xl font-medium'>Completed</h3>
            </div>
            <div className='rounded-2xl w-[45%] py-6 px-9 bg-green-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.activeCount}</h2>
                <h3 className='txt-xl font-medium'>Accepted</h3>
            </div>
            <div className='rounded-2xl w-[45%] py-6 px-9 bg-yellow-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.failedCount}</h2>
                <h3 className='txt-xl font-medium'>Failed</h3>
            </div>
        </div>
    )
}

TaskListNumber.propTypes = {
    data: PropTypes.shape({
        taskStats: PropTypes.shape({
            newTaskCount: PropTypes.number,
            completedCount: PropTypes.number,
            activeCount: PropTypes.number,
            failedCount: PropTypes.number,
        }).isRequired,
    }).isRequired,
};

export default TaskListNumber