import React from 'react';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import MainHeader from './components/Header/Header'
import  Footers  from './components/Footer/Footer';


import LoginPage  from './components/LoginPage/LoginPage.js';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const MarginContainer = styled.div`
  margin-top: 60px;
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
    // eslint-disable-next-line

    <Layout breakpoint="lg">
        <Header>
          <MainHeader/>
          
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
  );
};

export default App;
