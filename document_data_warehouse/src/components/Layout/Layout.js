import React from 'react';
import Header from '../Header/Header.js';
import LoginForm from '../LoginForm/LoginForm.js';
import { Container, LeftContainer, RightContainer, ResponsiveImage } from './Layout.style';
import Navbar from '../elements/Navbar/Navbar.js';
var imageFull = require('../../assets/pictures/loginPictureFull.png')
var image50 = require('../../assets/pictures/loginPicture50Percents.png')

const Layouts = () =>{
  return(
    <React.Fragment>
      <Navbar
        suffix = {{
          content: 'ระบบคลังเอกสารสินไหม',
          height: '125px',
        }} 
      />
      <Container>
        <LeftContainer>
          <ResponsiveImage>
            <img src={imageFull} />
          </ResponsiveImage>
        </LeftContainer>
        <RightContainer>
          <LoginForm/>
        </RightContainer>
      </Container>
    </React.Fragment>
  )
}

export default Layouts;
