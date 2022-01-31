import React from 'react';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import MainHeader from './components/Header/Header'
import  Footers  from './components/Footer/Footer';

import Navbar from './components/elements/Navbar/Navbar.js';
import LoginPage  from './components/LoginPage/LoginPage.js';
import styled from 'styled-components';
import Layouts from './components/Layout/Layout';

const { Header, Content, Footer } = Layout;

const MarginContainer = styled.div`
  margin-top: 95px;
  padding: 1;

  @media screen and (min-width: 601px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 0px;
  }

`

const App = () =>{

  return(
    <>
      <Layout breakpoint="lg">
        <Header style={{height: '95px'}}>
          <Navbar
            suffix = {{
              content: 'ระบบคลังเอกสารสินไหม',
              height: '125px',
            }} 
          />
        </Header>
        <MarginContainer>
          <Content>
            <LoginPage/>
          </Content>
        </MarginContainer>
        {/* <Footer>
          <Footers />
        </Footer> */}
      </Layout>
      
    </>
    //eslint-disable-next-line

    // <Layout breakpoint="lg">
    //     {/* <Header>
    //       <MainHeader/>
          
    //     </Header> */}
    //     <MarginContainer>
    //       <Content>
    //         <LoginPage/>
    //       </Content>
    //     </MarginContainer>
    //     {/* <Footer>
    //       <Footers />
    //     </Footer> */}
    // </Layout>
  );
};

export default App;
