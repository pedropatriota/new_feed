import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  padding:10px 14px; 
`;

export const List = styled.li`
  padding: 10px;
`

export const Button = styled.button`
  width: 160px;
  height:30px;
  border:none;
  background: #46b9de;
  color:#fff;
  border-radius:3px;

  &:disabled{
    background: #ccc;
    cursor: not-allowed !important;
    &:hover{
       background: #ccc;
    }
  }
  
  &:hover{
    background: #20a2cc;
  }
`

export const InputTitle = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`
export const InputBody = styled.textarea`
  width: 100%;
  min-height: 30px;
`

export const Name = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`
export const Body = styled.p`
  font-weight: normal;  
`