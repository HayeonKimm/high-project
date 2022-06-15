import React from 'react';
import {Navigate, useNavigate,useParams} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';




function Detail() {
    // const [rate, setRate] = React.useState(0);
    const [comment, setComment] = React.useState([]);
    const comment_ref = React.useRef(null);
   
   React.useEffect(() => {
     AddCommentAxios ();
    LoadCommmentAxios();
   }, []);   
    
   const AddCommentAxios =() => {
    axios({
        method: "post",
        headers: {"Content-Type": "application/json",
        Authorization: "Bearer" + localStorage.getItem('token')},
        data:{
        Comment : comment_ref.current.value                              
        }
       }).then(function(response)  {
        window.alert('댓글이 등록되었습니다!');
        window.reload();
       })
  }

    const LoadCommmentAxios =() => {
        axios.get('http://localhost:5001/list'
        ).then(function(response) {
              console.log(...response.data)
            setComment([...response.data]);
        });
    }


    
   
    return (
        <div>
            {/* <Dbox>
        {Array.from({ length: 5 }, (item, idx) => {
           return (
           <div
              key={idx}
           onClick={() => { setRate(idx + 1);
              }}
              style={{
              width: "40px",
              height: "40px",
              margin: "5px",
             marginTop: "20px",                   
             backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
              }}
          ></div>
          );
        })}
        <button>별점 매기기</button>
        </Dbox> */}
        <div>
            <input type="text"  onChange={(e)=>{setComment(e.target.value)}} ref={comment_ref}/>
             <button onClick={AddCommentAxios}>추가하기</button> 
        </div>
        <ListStyle>
            {comment.map((a, i) => {
                return (
                <ItemStyle
                    className="list_item"
                    
                    >
                    {a.comment}
                    <button >삭제하기</button>
                </ItemStyle>
                );
                })}
                
     </ListStyle>
            
        </div>
        
     
    )
}


// const Dbox = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// `
const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;


export default Detail;



