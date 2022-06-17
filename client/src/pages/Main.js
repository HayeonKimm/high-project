import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import Header2 from '../headers/header2';
import axios from 'axios';

function Main() {
  const navigate = useNavigate();
  
  // let {postId} =useParams();

  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    loadPostAxios();
    // loadUserAxios();
  }, []);

  // const loadUserAxios = () => {
  //   axios.get("http://54.180.120.192/api/main"
  //   ).then(function (response) {

  //   });
  // }
  const loadPostAxios = () => {
    axios.get('http://13.209.35.101:3000/'
    ).then((response)=> {
      console.log(response)
      setPost([...response.data]);
    });
  }

  return (
    <div>
      <>
        <Header2 />
      </>
      {/* <image shape= "circle" src={foodImg}></image>
           <nav>{user.userId}</nav>  */}



      <Box>
        {
          post.map((a, i) => {
            return (
             

                <Form onClick={() => { navigate(`/detail/${i}`) }}>
                  
                  <ImgB>
                    <Img src={a.foodImg} />
                  </ImgB>
                
                  <Text>
                    <p>{a.stdRestNm}</p><br />
                    <Title>{a.title}</Title>
                    <Content>{a.foodCost}</Content>
                    <tr></tr>
                  </Text>

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
margin-left:10px;
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



export default Main