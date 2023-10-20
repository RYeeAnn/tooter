import './HomePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="homePage">
            <h1 className="homePage__title">
                Tutor
            </h1>

            <Link to='/Student'><button className="homePage__button">
                Student
            </button></Link>

            <Link to='Teacher'><button className="homePage__button">
                Teacher
            </button></Link>

        </div>
    )
}

export default HomePage