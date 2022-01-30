import React from "react";
// import styled from "styled-components";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
function XSInput(props){
  
  const suffix = (
    <UserOutlined
    style={{
      fontSize: 14,
      fontFamily: 'DBOzoneX',
      width: '80%',
      //height: '50px'
      // marginLeft: '45px',
      // marginRight: '30px',

    }}
    />
  );

  function _onChange(evt){
    console.log(evt.target.value);
  }

  return (
      <Input
        placeholder={props.placeholder}
        size={props.size}
        prefix={suffix}
        onChange={_onChange}
        fontFamily={props.fontFamily}
      />
  )

}

export default XSInput;
