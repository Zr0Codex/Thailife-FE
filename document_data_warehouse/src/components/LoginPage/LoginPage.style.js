import styled from 'styled-components';

export const LoginSection = styled.div`
  margin-top: 135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 0px;
  //max-width: 1440px;

  margin:auto;
	position:relative;

  @media screen and (max-width: 1440px) {
    justify-content: center;
  }
  @media screen and (max-width: 601px) {
    flex-direction: column;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }

`
export const LoginContainer = styled.div`
  display: flex;
  
  margin: 1px;
  width: 100%;
  background: white;
  //border-radius: 4px;
  //border: 1px solid HSL(0, 0%, 98%);
  //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  //border-top: 3px solid #41ba90;
  padding: 0;
  border: 1px solid red; // for debug layout
  @media screen and (max-width: 375px) {
    margin:auto;
	  position:relative;
  }
`;



export const LoginFromBox = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  background-color: white;
  box-shadow: 0 0 40px rgba(0,0,0,0.16);
  border: 1px solid HSL(0, 0%, 98%);
  overflow: hidden;
  margin: 73px 43px 96px 29px;
  border-radius: 2px;
  border: 1px solid red; // for debug layout

  justify-content: center;
  align-items: center;

  // position: absolute;
  width: 628px;
  //height: 595px;
  // left: 727px;
  // top: 136px;

  background: #FFFFFF;
`

export const TryFooter = styled.div`
  // justify-content: right;
  // align-items: right;
  margin-bottom: 10px;
  border: 1px solid red; // for debug layout
`

export const LoginForm = styled.div`
  flex: 1 0 100%;
  max-width: 480px;
  width: 100%;
  padding: 60px;
  border: 1px solid red; // for debug layout
  align-item: center;
  // @media screen and (max-width: 601px) {
  //   max-width: 100%;
  // }
`

export const ImageBox = styled.div`
  width: 729px;
  border: 1px solid red; // for debug layout
  @media screen and (max-width: 729px) {
    display: none;
  }
`

export const HeaderWording = styled.header`
  padding: 20px;
  width: 284px;
  height: 42px;
  text-align: center;
  margin: 0;
  font-family: DBOzoneX;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 50px;
`