import React from 'react';
import { Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Inputs } = Input;

const suffix = (
  <UserOutlined
  style={{
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.85);',
  }}
  />
);

const onSearch = value => console.log(value);

const MainInput = (props) => {
  return (
      <Inputs
        placeholder={this.props.placeholder}
        size={this.props.size}
        suffix={suffix}
        onSearch={onSearch}
      />
  )
}
export default MainInput;
