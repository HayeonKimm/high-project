import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Header2  from '../headers/header2';
import axios from 'axios';

function Main({ 가게이름 }) {
    const navigate = useNavigate(); 
   
    // const [Img , setImg] = React.useState();

  const [post , setPost] = React.useState([]);

  React.useEffect(() => {
    loadPostAxios();
    // loadUserAxios();
   }, []);   
   

  const loadPostAxios = ()=> {
    axios.get('http://localhost:5001/list'
    ).then(function(response)  {
              console.log(...response.data)
        setPost([...response.data]);
    });    
}


    
    
        
    return (
        <div>
            {/* <image shape= "circle" src={.foodImg}></image>
           <nav>{user.userId}</nav>  */}
         <Header2/>
          
          
    <div>
    
    
    <div>
    {
        post.map((a, i) => {
          return (
            <Form >
              <Img src={a.foodImg} />
              <p>{a.stdRestNm}</p>
              <Title>{a.title}</Title>
              <Content>{a.foodCost}</Content>
              <tr></tr>

                    <button>삭제하기</button>
            </Form>
          )
        })
      }
    </div>
            
            
            
        
           
          </div>
    
          
  
        </div>
    );
}

const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
left: 27px;
`;

const Title = styled.h2`
   position: relative;
   right: 20px;
`;
const Img = styled.img`
   max-width: 550px;
   position: relative;
   right: 27px;
   justify-content: center;
   align-items: center;
`;
const Content = styled.p`
   margin: 5px auto;
   position: relative;
   right: 25px;
`;



export default Main