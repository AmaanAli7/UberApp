import  { useContext } from 'react';
import {Route,Routes} from 'react-router-dom';
import Start from './pages/start';
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext  } from './context/UserContext';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import CaptainProtectWrapper from './pages/CaptainProtect';
import UserLogout from './pages/Userlogout';
import CaptainHome from './pages/CaptainHome';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const ans=useContext(UserDataContext)
console.log(ans);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />

        <Route path='/login' element={<UserLogin/>} />
        <Route path='/riding' element={<Riding/>} />

        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>} />

        <Route path='/user/logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
        <Route path='/captain-riding' element={<CaptainRiding/>} />
      </Routes>   
     

      
 </div>
  )
}

export default App