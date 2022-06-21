import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
<<<<<<< HEAD
=======
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
// import {useDispatch} from 'react-redux'
// import {loginUser} from "../redux/modules/User.js";

function LogIn() {
    // const dispatch=useDispatch();
    const navigate = useNavigate();
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const [username, setUserName] = React.useState("");
    const [password, setPwd] = React.useState("");

    // const onSubmitHandler = ()=> {

    //     .preventDefault();

    //     // console.log("username", username);
    //     // console.log("password", password);
    //     let body = {
    //         "userId": id_ref.current.value,
    //         "password": pw_ref.current.value
    //     }

    //     dispatch(loginUser(body))
    //     .then(response => {
    //         if(response.payload.loginSuccess){

    //          navigate('/');
    //         }else{
    //             alert("로그인 정보가 잘못되었습니다!")
    //         }
    //     })

    // }
<<<<<<< HEAD
  
 
    const loginAxios= ()=> {
        axios.post('http://3.38.104.237/api/user/login', {
=======


    const loginAxios = () => {
        axios.post('http://localhost:5001/list', {
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
            "userId": id_ref.current.value,
            "password": pw_ref.current.value
        }).then(function (response) {
            alert("로그인 되었습니다!")
            navigate('/');

            localStorage.setItem('access_token', response.data.token);

            console.log(response)
        }).catch(function (error) {
            alert("로그인정보가 틀렸습니다.")
        })
    }

    const ariaLabel1 = { 'aria-label': 'description' };

    return (
        <div>
<<<<<<< HEAD
            
    <Container>
    
    <Title>로그인</Title>
    <div> 
            <Input   placeholder="아이디를 입력해주세요." sx={{marginTop: '30px;'}}
            inputProps={ariaLabel1}
            onChange={(e) => setUserName(e.target.value)} ref={id_ref}/>    <br/>
            <Input type="Password"  sx={{margin: '20px;'}} placeholder="비밀번호를 입력해주세요." 
            onChange={(e) => setPwd(e.target.value)} ref={pw_ref}/>   <br/>      
      
            <Box>
            <Button variant="text"  onClick={loginAxios} sx={{ color: 'black', fontFamily: 'Yeongdo-Rg', }}>로그인</Button>
            <Button variant="text"  onClick={()=>{navigate('/SignUp')}} sx={{ color: 'black', fontFamily: 'Yeongdo-Rg' }}>회원가입</Button>
            </Box>
           
            
          </div>
    
          
        </Container>
=======

            <Container>

                <Title>로그인</Title>
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>

                        <TextField id="input-with-sx" label="E-mail" variant="standard" inputRef={id_ref} />
                    </Box>   <br />
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>

                        <TextField id="input-with-sx" label="password" variant="standard" inputRef={pw_ref} />
                    </Box>

                    <br />

                    <Box1>
                        <Button variant="text" onClick={loginAxios} sx={{ color: 'black', fontFamily: 'Yeongdo-Rg', }}>로그인</Button>
                        <Button variant="text" onClick={() => { navigate('/SignUp') }} sx={{ color: 'black', fontFamily: 'Yeongdo-Rg' }}>회원가입</Button>
                    </Box1>


                </div>


            </Container>
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
        </div>
    );
}

const Container = styled.div`
background-size: cover;
background-color: ;
width: 400px;
height: 450px;
padding: 50px;
border: 2px solid black;
display: flex;
flex-direction: column;
align-content: flex-start;
float: center;
margin: 20px 20px 40px 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 15px;
border: 2px black dotted; 
text-align: center;`

const Title = styled.h1`

font-family: 'Yeongdo-Rg';
color: transparent;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLt1zib9jf_KGn-cbMVXEd1jnoj4d8N3Tf_e8ZAERycVvUBXsDugqAX_i-JVJ000pfns&usqp=CAU');
background-clip: text;
-webkit-background-clip: text;
font-size:40px
`

<<<<<<< HEAD
const Box = styled.div`
=======
const Box1 = styled.div`
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
margin-top: 30px; 

`




export default LogIn