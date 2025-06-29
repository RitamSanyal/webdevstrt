import PropTypes from 'prop-types';

const Header = (props) => {

    const logout = () => {
        localStorage.setItem("loggedInUser", '');
        props.changeUser(null);
        // window.location.reload();
    }
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName 👋🏽</span></h1>
            <button onClick={logout} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md'>Logout</button>
        </div>
    )
}

Header.propTypes = {
    changeUser: PropTypes.func.isRequired,
};

export default Header