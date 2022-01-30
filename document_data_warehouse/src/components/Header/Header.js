import React from 'react';
import logo from '../../assets/icons/LOGO-THAILIFE.png';
import { 
  LogoBox, 
  StyledLogo, 
  HeaderContainer,
  HeaderWordings, 
  HeaderColumnLeft,
  HeaderColumnRight
} from './Header.style.js'

const Header = () => {
  return(
    <header>
      <HeaderContainer>
        <HeaderColumnLeft>
          <LogoBox>
            <StyledLogo src={logo} alt="logo" />
          </LogoBox>
        </HeaderColumnLeft>
        <HeaderColumnRight>
          <HeaderWordings>
            ระบบคลังเอกสารสินไหม
          </HeaderWordings>
        </HeaderColumnRight>
        {/*  */}
      </HeaderContainer>
    </header>
  )
};

export default Header;