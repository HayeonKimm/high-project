import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';
import Header1  from '../headers/header1';

function NMain() {
  const navigate = useNavigate(); 
   
    

  const [post , setPost] = React.useState([]);

  React.useEffect(() => {
    loadPostAxios();
  
   }, []);   
   

  const loadPostAxios = ()=> {
<<<<<<< HEAD
    axios.get('http://localhost:5001/list'
=======
    axios.get('http://13.209.35.101:3000/'
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
    ).then(function(response)  {
       
        setPost([...response.data]);
    });    
}
        
    return (
        <div>
          <>
          <Header1/>
          </>
            {/* <image shape= "circle" src={foodImg}></image>
           <nav>{user.userId}</nav>  */}
        
          
 
         <Box>
         {
        post.map((a, i) => {
          return (
            <Form>
              <ImgB>
              <Img src={a.foodImg} />
              </ImgB>
              
              <Text>
              <p>{a.stdRestNm}</p><br/>
              <Title>{a.title}</Title>
              <Content>{a.foodCost}</Content>
              <tr></tr>
              </Text>
              

                    {/* <button onClick={() => {
              navigate(`/Detail/${i}/`)
            }}>삭제하기</button> */}
            </Form>
                    
          )
          
        })
      } </Box>
 
  
  
    
        </div>
    );
}
const ImgB = styled.div`
display: flex;
flex-direction: row;
`
const Text = styled.div`
display: flex;
flex-direction: column;
`

const Box = styled.div`

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
`

const Form = styled.div`
flex-direction: row;
display: flex;
padding: 5px;

width: 500px;
border-radius:15px;
border: 1px solid black; 

margin: 0 auto;
margin-bottom: 10px;

`;

const Title = styled.h2`
`;

const Img = styled.img`
  border-radius:15px;
  width: 150px;
`;
const Content = styled.p`
  
  
`;



export default NMain