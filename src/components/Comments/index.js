import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import{ add, postComments} from '../../redux/slices/commentsSlice'
import * as S from './styles';

function Comments({postId, commentsByPostId, addNewComment, newComments}) {
  const dispatch = useDispatch()
  const newComment= useSelector(state=> state.comments.newComment)   

  const [ state, setState]= useState({
    name: '',
    body: ''
  }) 

  const [disabled, setDisabled]= useState(false)

  useEffect(()=>{
    if(state.name && state.body)
    setDisabled(false)
    else setDisabled(true)
  },[state])

  useEffect(()=>{   
    dispatch(add())     
  }, [newComment])
  
  const handleChange= (event)=>{
    setState({
      ...state, 
      [event.target.id]:event.target.value
    })
  }  

  const submitComment = (event)=>{  
    event.preventDefault()    
    const obj = {   
      name: state.name,
      body: state.body,
      email: 'user@gmail.com',
      postId: postId
    }
    // resource will not be really updated on the server but it will be faked as if.   
    dispatch(postComments(obj))   

    setState({name:'', body:''})
    addNewComment()
  }


  return (
   <S.Container>     
        {commentsByPostId?.map(comment=>(
          <S.List key={comment.id}>
            <S.Name>{comment.name}</S.Name>
            <S.Body>{comment.body}</S.Body>
          </S.List>
        ))}
        {!newComments ? 
          <S.Button type='button' onClick={addNewComment}> Add new comment...</S.Button>
          : (
            <form onSubmit={submitComment}>
              <S.InputTitle 
                type='text' 
                id='name' 
                value={state.name} 
                onChange={handleChange} 
                placeholder='Write a title for your comment...'/>

              <S.InputBody                
                id='body' 
                value={state.body} 
                onChange={handleChange} 
                placeholder='Write a body for your comment...'/>

              <S.Button 
                disabled={disabled} 
                type='submit'> 
                  Add new comment...
                </S.Button>
            </form>
          )
        }
   </S.Container>
  )
}

export default Comments;