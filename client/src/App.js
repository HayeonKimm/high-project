import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import Detail from './pages/Detail';
<<<<<<< HEAD
import NMain  from'./pages/NMain'
=======
import NMain  from'./pages/NMain';
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652



function App() {
  
  const [signIn, setSignIn]=useState();

  
  
  useEffect(()=> {
    const token = localStorage.getItem("token")
    token == null ? setSignIn(false) : setSignIn(true);
  },[])
 
 
  return (
    <div className="App">
      
      <Routes>
<<<<<<< HEAD
     
     {signIn ? (<Route path="/" element={<Main />} /> 
              
        ) : (<Route path="/" element={<NMain />} />
        )}
               
        <Route path="/SignUp" element={<SignUp />} />   
        <Route path="/LogIn" element={<LogIn />} />
=======
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<NMain />} />
     {/* {signIn ? ( <Route path="/" element={<NMain />} />
              
        ) : (<Route path="/" element={<NMain />} />
        )} */}
               
        <Route path='/SignUp'  element={<SignUp />} />   
        <Route path='/LogIn' element={<LogIn />} />
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
        <Route path='/Detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  );
}


export default App;
