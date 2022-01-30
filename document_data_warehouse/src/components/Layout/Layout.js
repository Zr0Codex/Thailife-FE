import React from 'react';
import Header from '../Header/Header.js';
import LoginForm from '../LoginForm/LoginForm.js';
import { Container, LeftContainer, RightContainer, ResponsiveImage } from './Layout.style';

var imageFull = require('../../assets/pictures/loginPictureFull.png')
var image50 = require('../../assets/pictures/loginPicture50Percents.png')

const Layout = () =>{
  return(
    <React.Fragment>
      <Header />
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

export default Layout;
