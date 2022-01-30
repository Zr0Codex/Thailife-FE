
import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  height: 125px;
  width: 100%;
  left: 0px;
  top: 0px;

  background: #007BC1;

  @media screen and (min-width: 601px) {
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    height: 65px;
    width: 100%;
  }
  @media screen and (max-width: 150px) {
    display: none;
  }
`

export const HeaderColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex: 2;
`

export const LogoBox = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-left: 25px;
  //margin-bottom: 31px;
`

export const StyledLogo = styled.img`
  height: 125px;
  width: 132px;

  @media screen and (min-width: 601px) {
    height: 125px;
    width: 132px;
  }
  
  @media screen and (max-width: 600px) {
    height: 75px;
    width: 82px;
  }

  @media screen and (max-width: 375px) {
    justify-content: center;
    height: 50px;
    width: 62px;
  }

  @media screen and (max-width: 150px) {
    display: none;
  }
`
export const HeaderWordings = styled.h1`
  //position: flex;
  //width: 100%;
  height: 56px;
  left: 187px;
  margin-top: 30px;
  text-align: left;
  margin-left: 20px;
  font-family: DBOzoneX;
  font-style: normal;
  font-weight: 20;
  font-size: 48px;
  line-height: 56px;

  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 601px) {
    font-size: 48px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 30px;
    margin-top: 15px;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }

`