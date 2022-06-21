import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';
import Header2 from '../headers/header2';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Detail(props) {

  
    const [comment, setComment] = React.useState([]);
    const [userId, setUserId] = React.useState([]);
    const comment_ref = React.useRef(null);
    // const navigate = useNavigate();
    const token = localStorage.getItem("token")

    React.useEffect(() => {

        LoadCommmentAxios();
    }, []);

    const AddCommentAxios = () => {

        axios({
            method: "post",
            url: 'http://localhost:5001/list',
<<<<<<< HEAD
            // headers: {"Content-Type": "application/json",
            // Authorization: "Bearer" + localStorage.getItem('token')},
=======
            headers: {"Content-Type": "application/json",
            Authorization: "Bearer" + localStorage.getItem('token')},
>>>>>>> 38cd6222fc12858c10f6b778230d3e4d77a55652
            data: {
                Comment: comment_ref.current.value
            }
        }).then(function (response) {
            window.alert('댓글이 등록되었습니다!');
            window.location.reload();
        })
    }

    const LoadCommmentAxios = () => {
        axios.get('http://localhost:5001/list' 
        ).then(function (response) {
            console.log(...response.data)
            setComment([...response.data]);
            setUserId([...response.data]);
        });
    }

    const DeleteCommentAxios = () => {
        axios.delete(`http://localhost:5001/list/api/details/`,
        {
        // headers:{'Authorization': `Bearer ${token}`}
        }).then((response)=> {
            console.log(response)
            alert('삭제 완료')
            window.location.reload();
        }).catch((error)=> {
            console.log(error.response.data.errorMessage)
            console.log(error)
        })
    }


    return (
        <div>
            <div>
                <Header2 />
            </div>

        
            <Box>
                <ListStyle>
                    {comment && comment.map((a, i) => {
                    
                        return (
                            <ItemStyle
                                className="list_item">
                                {a.Comment}
                                {a.username}
                                
                                <IconButton aria-label="delete" onClick={DeleteCommentAxios}>
                                    <DeleteIcon />
                                </IconButton>
                            </ItemStyle>
                        );
                    })}
                </ListStyle>
            </Box>
            <Text>
                <input type="text" ref={comment_ref} />
                <button onClick={AddCommentAxios}>추가하기</button>
            </Text>


        </div>


    )
}


// const Dbox = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// `

const Box = styled.div`
`
const ListStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
background-color: aliceblue;
font-family: 'Yeongdo-Rg';
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;

`;

const Text = styled.div`



    font-family: 'Yeongdo-Rg';


`

export default Detail;



