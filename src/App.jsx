import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Student from './pages/Student/Student';
import StudentSignUp from './pages/StudentSignUp/StudentSignUp';
import Teacher from './pages/Teacher/Teacher';
import TeacherSignUp from './pages/TeacherSignUp/TeacherSignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='/Student' element={ <Student />} />
      <Route path='/StudentSignUp' element={ <StudentSignUp />} />
      <Route path='/Teacher' element={ <Teacher />} />
      <Route path='TeacherSignUp' element={ <TeacherSignUp />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
