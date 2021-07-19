import React from 'react';

import * as S from './styles';

function template({children}) {
  return (
   <S.Container>     
     <S.Main>
       {children}
     </S.Main>     
   </S.Container>
  )
}

export default template;