import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import PropTypes from 'prop-types'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask data={elem} key={idx} />
                }
                if (elem.newTask) {
                    return <NewTask data={elem} key={idx} />
                }
                if (elem.completed) {
                    return <CompletedTask data={elem} key={idx} />
                }
                if (elem.failed) {
                    return <FailedTask data={elem} key={idx} />
                }
            })}
        </div>
    )
}

TaskList.propTypes = {
    data: PropTypes.shape({
        tasks: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
}

export default TaskList