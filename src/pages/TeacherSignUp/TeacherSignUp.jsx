import './TeacherSignUp.scss';
import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

function TeacherSignUp() {
    const API_URL = 'http://localhost:5050';

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const handleSignUp = () => {
        if (!firstname || !lastname || !email || !password || !experience) {
            setErrorMessage("All fields are required!");
            return;
        }
    
        const requestData = qs.stringify({
            firstname,
            lastname,
            email,
            password,
            experience
        });

        setIsLoading(true);
        setErrorMessage(null); // Reset any previous errors
    
        axios.post(`${API_URL}/api/v1/tutors/signup`, requestData)
        .then(response => {
            setIsLoading(false);
            if (response.status === 200) {
                // Handle success, e.g., redirecting the user
            } else {
                setErrorMessage("An error occurred during signup. Please try again.");
            }
        })
        .catch(error => {
            setIsLoading(false);
            setErrorMessage("An error occurred during signup. Please try again.");
            console.error("Error signing up", error);
        });
    }

    return (
        <div className="teacherSign">
            <div className="teacherSign__container">
                <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Experience (years)" value={experience} onChange={(e) => setExperience(e.target.value)} />
                <button onClick={handleSignUp} disabled={isLoading}>{isLoading ? "Signing Up..." : "Sign Up"}</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    )
}

export default TeacherSignUp;
