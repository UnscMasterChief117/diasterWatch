import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Homepage';


//   import Login from "../auth/Login.jsx";
//   // import ProtectedRoute from '../auth/ProtectedRoutes';

// const Mainsection = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

//   return (
//     <div className=''>
//       <Routes>
//         <Route path="/" element={<Home />} />
//          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 
         
      
//         {/* Protect these routes */}
//         <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} >
//           <Route path="/notebook" element={<CodeNotebookApp />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/cars" element={<Cars />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/chat" element={<MessagePage />} />
//           <Route path="/register" element={<SignUpForm />} />
      
//           <Route path="/friends" element={<FriendsPage  />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

import Reports from './Reports';
import FirstAid from './FirstAid';

const Mainsection = () => {
  return (
    <div className=''>    
      <Routes>
        <Route path="/reports" element={<Reports />} />
        <Route path="/firstaid" element={<FirstAid />} />
        <Route path="/" element={<Home />} />       
      </Routes>    
    </div>
  )
}
export default Mainsection;
   