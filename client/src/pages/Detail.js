// import React from 'react';
// import {useNavigate,useParams} from 'react-router-dom'
// import styled from 'styled-components'







// function Detail() {
//     const [rate, setRate] = React.useState(0);
//     const [comment, setComment] = React.useState([]);
//     const text = React.useRef(null);
   

    

  



//     const AddCommentAxios =() => {
//         axios.post('url',{
//             "Comment": text.current.value
//         }).then(funtion(response){
//             console.log(response)
           
//         })
//     }
    

//     const LoadCommmentAxios =() => {
//         axios.get('url',).then(funtion(response) {
//             setComment([...response.data.]);
//         }
//     }


    
   
//     return (
//         <div>
//             <Dbox>
//         {Array.from({ length: 5 }, (item, idx) => {
//            return (
//            <div
//               key={idx}
//            onClick={() => { setRate(idx + 1);
//               }}
//               style={{
//               width: "40px",
//               height: "40px",
//               margin: "5px",
//              marginTop: "20px",                   
//              backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
//               }}
//           ></div>
//           );
//         })}
//         <button>별점 매기기</button>
//         </Dbox>
//         <div>
//             <input type="text"  onChange={(e)=>{e.target.value}} ref={text}/>
//             <button onClick={}>추가하기</button>
//         </div>
//         <ListStyle>
//             {comment.map((list, index) => {
//                 return (
//                 <ItemStyle
//                     className="list_item"
//                     key={index}
//                     >
//                     {list}
//                     <button onClick={}>삭제하기</button>
//                 </ItemStyle>
//                 );
//                 })}
                
//      </ListStyle>
            
//         </div>
        
     
//     )
// }


// const Dbox = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// `
// const ListStyle = styled.div`
// display: flex;
// flex-direction: column;
// height: 100%;
// overflow-x: hidden;
// overflow-y: auto;
// `;

// const ItemStyle = styled.div`
// padding: 16px;
// margin: 8px;
// background-color: aliceblue;
// `;


// export default Detail;



