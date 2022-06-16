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
        <Button onClick={logOut}> log out</Button>
   
        
        <Line/>
        </>
    )
}

const Title = styled.h1`

font-family: 'Yeongdo-Rg';
color: transparent;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLt1zib9jf_KGn-cbMVXEd1jnoj4d8N3Tf_e8ZAERycVvUBXsDugqAX_i-JVJ000pfns&usqp=CAU');
background-clip: text;
-webkit-background-clip: text;
font-size:40px
`
const Line = styled.hr`
border: 1px black solid; 
`
const Button = styled.h2`
font-family: 'Yeongdo-Rg';
color: transparent;
background-image: url('https://image.imnews.imbc.com/newszoomin/newsinsight/__icsFiles/afieldfile/2019/03/11/20190311-207.jpg');
background-clip: text;
-webkit-background-clip: text;
font-weight: bold;
&:hover{

    color: white;
}
`
export default Header2