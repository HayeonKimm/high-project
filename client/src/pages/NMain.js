import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';

function NMain({ 가게이름 }) {
  const navigate = useNavigate();

  const [post , setPost] = React.useState([]) 

//   const loadPostAxios= ()=> {
//     axios.get('url'
//     ).then(function(response)  {
              
//         setPost([...response.data.]);
//     });
    
// }

          
         
    
 
    return (
        <div>
          <button onClick={()=>{navigate('/LogIn')}} > Log in  </button>
          <button onClick={()=>{navigate('/SignUp')}} > Sign Up </button>
          <Line/>
    <div>
    
    
    <div>
      {
        post.map((a, i) => {
          return (
            <div style={{ background: 'gray', height: '300px', width: '300px', color: 'white' }}>
              <img src={setPost[index].foodImg} />
              <p>{setPost[index].stdRestNm}</p>
              <p>{setPost[index].foodNm}</p>
              <p>{setPost[index].foodCost}</p>
              <tr></tr>
            </div>
          )
        })
      }
    </div>
            
            
            
        
           
          </div>
    
          
  
        </div>
    );
}

const Line = styled.hr`
`


export default NMain