import './Teacher.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Teacher() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        axios
        .post('https://online-tutoring-system-api.herokuapp.com/api/v1/tutors/login', {
            username: username,
            password: password
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error logging in", error);
        });
    }

    return (
        <div className="teacher">
            <div className="teacher__container">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogIn} className="teacher__button">
                    Log In
                </button>

                <Link to='/TeacherSignUp'><button className="teacher__button">
                    Sign Up
                </button></Link>
            </div>
        </div>
    )
}

export default Teacher