import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  background: rgba(0,0,0,.3);
  color: #fff;
  z-index:10;
`;

export default function FullScreenSpinner(){
  return (<LoadingContainer><Spinner/></LoadingContainer>);
}