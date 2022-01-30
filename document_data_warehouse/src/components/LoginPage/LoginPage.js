import { Layout, Image, Form, Input, Button, Checkbox } from 'antd';
import React from 'react';

import { 
  LoginSection, 
  LoginFromBox, 
  ImageBox, 
  LoginContainer, 
  HeaderWording 
  } from './LoginPage.style.js'
import { UserOutlined, LockOutlined  } from '@ant-design/icons';

// import  LoginPictureV2  from '../../assets/icons/LoginPictureV2.svg'
// import  Footers  from '../Footer/Footer'

// import MainInput from '../../components/elements/MainInputs'
// import TextField from '../../components/elements/TextFieldV2'
// import { Formik } from 'formik'
import XSInput from '../../components/elements/TextFieldV2'

const LoginPicture = require('../../assets/pictures/loginPictureFull.png');


const { Content, Footer } = Layout;

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function LoginPage ({}) {
  const formItemProps = {
    hasFeedback: false,
    className: 'tw-my-3',
  }

    return (
        <LoginSection>
          <LoginContainer>
            <ImageBox>
              {/* <img src={LoginPictureV2} alt="LoginPictureV2"></img> */}
              <Image
                preview={false}
                src={LoginPicture}
              />
            </ImageBox>
            <LoginFromBox>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: false }}
              onFinish={onFinish}
            >
              <Form.Item>
                <HeaderWording>
                  ลงชื่อเข้าใช้งานระบบ
                </HeaderWording>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="รหัสพนักงาน"
                  fontFamily="DBOzoneX"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" style={{float: 'right'}}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button type="primary" block htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
              {/* <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item>
                  <HeaderWording>
                    ลงชื่อเข้าใช้งานระบบ
                  </HeaderWording>
                </Form.Item>

                <Form.Item>
                  <XSInput 
                    placeholder="รหัสพนักงาน"
                    size="large"
                    fontFamily="DBOzoneX"
                  />
                  
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                
              </Form> */}
              
            </LoginFromBox>
            {/* <Footers/> */}
            {/* <TryFooter>
              <Footers/>
            </TryFooter> */}
            {/* <TryFooter>
                <Footers/>
              </TryFooter> */}
          </LoginContainer>
          
        </LoginSection>
        
    )
}

export default LoginPage

