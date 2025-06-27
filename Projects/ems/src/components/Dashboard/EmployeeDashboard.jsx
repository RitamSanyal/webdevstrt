import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import PropTypes from 'prop-types'

const EmployeeDashboard = (props) => {
    // console.log(data)
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumber data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}

EmployeeDashboard.propTypes = {
    changeUser: PropTypes.func.isRequired,
    data: PropTypes.any.isRequired
}

export default EmployeeDashboard