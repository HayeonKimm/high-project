import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import Detail from './pages/Detail';
import NMain  from'./pages/NMain';



function App() {
  
  const [signIn, setSignIn]=useState();

  
  
  useEffect(()=> {
    const token = localStorage.getItem("token")
    token == null ? setSignIn(false) : setSignIn(true);
  },[])
 
 
  return (
    <div className="App">
      
      <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<NMain />} />
     {/* {signIn ? ( <Route path="/" element={<NMain />} />
              
        ) : (<Route path="/" element={<NMain />} />
        )} */}
               
        <Route path='/SignUp'  element={<SignUp />} />   
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  );
}


export default App;
