import './App.css';
import SignUp from './component/SignUp';
import Login from '../src/component/Login'
import { AuthProvider } from './Context/AuthContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
<AuthProvider>
          <Routes>

            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        
</AuthProvider>
     
      </BrowserRouter>


    </div>
  );
}

export default App;
