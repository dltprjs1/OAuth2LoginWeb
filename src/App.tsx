import './App.css';
import { Route,Routes } from 'react-router-dom';
import OAuth from 'views/Authentication/OAuth';
import SignIn from 'views/Authentication/SignIn';
import SignUp from 'views/Authentication/SignUp';

// 태그는 하나가 와야한다 (0개 또는 2개 이상의 태그 불가)
function App() {

  return (
    <Routes>
      <Route path='/auth'>
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
        {/* http://localhost:3000/auth/oauth-response/********(token)/3600(expirationTime) */}
        {<Route path='oauth-response/:token/:expirationTime' element={<OAuth />} />}    
      </Route>
    </Routes>           
  );
}

export default App;
