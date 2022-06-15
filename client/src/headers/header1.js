import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Header1() {

    const navigate = useNavigate();

    const loadUserAxios = {
        axios.get('로그인')
    }

    return (
        <>
        <Title onClick={()=> {navigate('/') }}>🛣고속도로  로 '맛' 으 </Title>
        <button onClick={()=>{navigate('/LogIn')}} > Log in  </button>
        <button onClick={()=>{navigate('/SignUp')}} > Sign Up </button>
        
         <Line/>
        </>
    )
}

const Title = styled.h1`
font-family: 'Yeongdo-Rg';

`
const Line = styled.hr`
`
export default Header1