import React from 'react';
import logo from '../../../assets/icons/LOGO-THAILIFE.png';
import { StyledLogo, HeaderContainer, HeaderColumnLeft, HeaderColumnCenter, LogoBox, HeaderWordings, HeaderColumnRight } from './Navbar.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar(props){
  const suffix = { ...props.suffix }
  return(
    <HeaderContainer 
      height={suffix.height}
    >
      <HeaderColumnLeft>
        <LogoBox>
          <StyledLogo src={logo} alt='logo'/>
        </LogoBox>
      </HeaderColumnLeft>
      <HeaderColumnCenter>
        <HeaderWordings>
          {suffix.content}
        </HeaderWordings>
      </HeaderColumnCenter>
      <HeaderColumnRight></HeaderColumnRight>
    </HeaderContainer>
 
  )
}

