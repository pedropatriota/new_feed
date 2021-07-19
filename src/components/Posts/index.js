import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import Comments from '../Comments'
import * as S from './styles';

function Posts() {
  const {posts} = useSelector(state=> state.posts)  
  const {comments} = useSelector(state=> state.comments) 

  const[ showComments, setShowComments] = useState(false)
  const[newComment, setNewComment]= useState(false)
  
  const commentsByPost = (id) => comments.filter(comment => comment.postId === id)

 const toggle = (index) => {
    if (showComments === index) {
      return setShowComments(null);
    }
    setShowComments(index);
  };

  const addNewComment =()=> setNewComment(!newComment)
 
  return (
   <S.Container>
     {posts?.map((post, index)=>(
       <React.Fragment key={post.id} >
       <S.PostList onClick={()=>toggle(index)}>
         <S.Title>{post.title}</S.Title>
         <S.Body>{post.body}</S.Body>
         <S.Comments>Comments({commentsByPost(post.id).length})</S.Comments>
       </S.PostList>
      {showComments === index ? (
        <Comments  
          postId={post.id}         
          commentsByPostId={commentsByPost(post.id)} 
          addNewComment={addNewComment} 
          newComments={newComment}/>          
      ): null}        
      </React.Fragment>
     ))}
   </S.Container>
  )
}

export default Posts;