import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import { storage } from '../shared/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


function SignUp() {
    const navigate = useNavigate();

    const profile_ref = React.useRef(null);
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const pw_check_ref = React.useRef(null);


    const [username, setUserName] = React.useState("");
    const [password, setPwd] = React.useState("");
    const [pwdCheck, setPwdCheck] = React.useState("");

    const UpImageUrl = async (e) => {


        const upload_file = await uploadBytes(
            ref(storage, `images/${e.target.files[0].name}`),
            e.target.files[0]
        );


        const file_url = await getDownloadURL(upload_file.ref)
        profile_ref.current = { url: file_url };
    };


    const signupdata = () => {

        axios.post("http://3.38.104.237", {
            "userImageUrl": profile_ref.current?.url,
            "userId": id_ref.current.value,
            "password": pw_ref.current.value,
            
        }).then(function (response) {


            alert("회원가입을 축하드립니다!!")
            navigate('/');

        });

    }
    const ariaLabel1 = { 'aria-label': 'description' };
    const Input1 = styled('input')({
        display: 'none',
      });
    return (
        <div>

            <div>


                <div style={{}}>
                    <Container>
                        <Title>회원가입</Title>
                        <label htmlFor="icon-button-file">
                            <Input1 
                            accept="image/*"id="icon-button-file" type="file" 
                            onChange={UpImageUrl}
                            ref={profile_ref} />
                            <IconButton sx={{right: '47%'}} color="primary" aria-label="upload picture"type="file" accept="image/*"  component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                        <Input placeholder="아이디를 입력해주세요."
                            inputProps={ariaLabel1}
                            onChange={(e) => setUserName(e.target.value)}
                            ref={id_ref} />  <br />

                        <Input
                            label="비밀번호"
                            onChange={(e) => setPwd(e.target.value)}
                            type="Password"
                            inputProps={ariaLabel1}
                            placeholder="7자리이상 비밀번호 입력해주세요"
                            ref={pw_ref} /><br />

                        <Input
                            label="비밀번호 확인"
                            inputProps={ariaLabel1}
                            onChange={(e) => setPwdCheck(e.target.value)}
                            type="Password"
                            placeholder="비밀번호를 다시 한번 입력해주세요."
                            ref={pw_check_ref} /><br />


                        <Signupbutton>
                            <Button variant="text" onClick={signupdata} sx={{ color: 'black', fontFamily: 'Yeongdo-Rg' }}>회원가입</Button>
                            <Button variant="text" onClick={() => { navigate('/') }} sx={{ color: 'black', fontFamily: 'Yeongdo-Rg' }}>취소</Button>

                        </Signupbutton>



                    </Container>

                </div>


            </div>
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
margin: 40px 20px 40px 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
text-align: center;
border-radius: 20%;
`
const Title = styled.h1`

font-family: 'Yeongdo-Rg';
color: transparent;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLt1zib9jf_KGn-cbMVXEd1jnoj4d8N3Tf_e8ZAERycVvUBXsDugqAX_i-JVJ000pfns&usqp=CAU');
background-clip: text;
-webkit-background-clip: text;
font-size:40px
`
const Signupbutton = styled.div`
  margin: auto;
  width: 220px;
  padding: 20px;
`;

const Buttons = styled.button`
margin-left: 8px;
`


export default SignUp