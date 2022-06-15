import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Header2() {

    const navigate = useNavigate();
    const logOut= () => {
        localStorage.removeItem('login-token');
        
        navigate('/')
      }
  

    return (
        <>
        <Title onClick={()=> {navigate('/') }}>🛣고속도로  로 '맛' 으 </Title>
        <button onClick={logOut}> log out</button>
         <Line/>
        </>
    )
}

const Title = styled.h1`
font-family: 'Yeongdo-Rg';

`
const Line = styled.hr`
`
export default Header2