import React from "react"
import PostsHeader from "../PostsHeader"
import Posts from "../Posts"

import * as S from "./styles"

function PostsList() {
  return (
    <S.Container>
      <S.MainLabel>Posts' List and its Comments</S.MainLabel>
      <PostsHeader />
      <Posts />
    </S.Container>
  )
}

export default PostsList
