import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import PropTypes from 'prop-types';

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

AdminDashboard.propTypes = {
    changeUser: PropTypes.func.isRequired,
};

export default AdminDashboard