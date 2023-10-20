import './StudentSignUp.scss';

function StudentSignUp() {
    return (
        <div className="studentSign">
            <div className="studentSign__container">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default StudentSignUp