
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export const VertCentRow = ({style, children}) => (<Row
  style={{
    display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: '0px',
    ...style,
  }}
>{ children }</Row>)


export const Icon = ({ src, style, s=1, ...rest }) => { 
  let size = `${(s * 150)}px`;
  return (
  <div props={ { ...rest } } style={{ textAlign: 'center', width: '100%' }}>
    <img style={{ textAlign: 'center', width: size, height: size }} src={src} />
  </div>) 
}
