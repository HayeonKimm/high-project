import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';


function NMain({ 가게이름 }) {
  

  const [post , setPost] = React.useState([])    

  const loadPostAxios = ()=> {
    axios.get('http://localhost:5001/list'
    ).then(function(response)  {
              
        setPost([...response.data.list]);
    });
    
}

          
         

 
    return (
        <div>
    
          <Line/>
    <div>
    
    
    <div>
      {
        post.map((a, i) => {
          return (
            <div style={{ background: 'gray', height: '300px', width: '300px', color: 'white' }}
            key={index}>
              <img src={setPost[index].foodImg} />
              <p>{setPost[index].stdRestNm}</p>
              <p>{setPost[index].foodNm}</p>
              <p>{setPost[index].foodCost}</p>
              <tr></tr>

                    <button>삭제하기</button>
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