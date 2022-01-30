import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  height: 100%;
  width: 100%;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  // object-fit: cover;
  // background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
`
export const ResponsiveImage = styled.div`
  //width: auto;
  max-width: 50%;
  height: 762px;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

`