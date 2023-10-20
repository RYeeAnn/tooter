import './Student.scss';
import { Link } from 'react-router-dom';

function Student() {
    return (
        <div className="student">
            <div className="student__container">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button className="student__button">
                    Log In
                </button>

                <Link to='/StudentSignUp'><button className="student__button">
                    Sign Up
                </button></Link>
            </div>
        </div>
    )
}

export default Student