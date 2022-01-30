import styled from 'styled-components';

export const TextConent = styled.a`
  float: right;
  margin-right: 35px;
  height: 21px;
  font-family: DBOzoneXLi;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  display:inline-block;
  /* identical to box height */


  color: #827F7F;

  @media screen and (min-width: 601px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 10px;
    
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;
