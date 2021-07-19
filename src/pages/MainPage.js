import React, {useEffect} from 'react';
import Template from '../Template'
import PostsList from '../components/PostsList'
import { useDispatch} from 'react-redux'
import {fetchPosts} from '../redux/slices/postsSlice'
import {fetchComments} from '../redux/slices/commentsSlice'

function MainPage() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPosts())
    dispatch(fetchComments())
  }, [dispatch])


  return (
   <Template>
     <PostsList/>     
   </Template>
  )
}

export default MainPage;