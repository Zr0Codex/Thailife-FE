
import styled from 'styled-components';



export const ContainerLogin = styled.section`
  item-align: center;
  font-family: 'DBOzoneX';
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid;
  border-radius: 2px;
  width: 628px;
  height: 595px;
  //filter: blur(1px);
  // &:hover {
  //   box-shadow: 1px 1px 1px thistle;
  //   filter: blur(0.3px);
  // }
`

export const Title = styled.h1`
  flex-direction: column;
  text-align: center;
  font-family: DBOzoneXMed;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  color: #000000;
`

export const User = styled.input`
  flex-direction: column;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  // margin: 10px;
  border: none;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 2px;
  ::placeholder {
    color: palevioletred;
  }

`