import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = styled.div `
  .jumbo{
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #fff;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default function Jumbotron(){
  return(
    <Styles>
      <Jumbo fluid className='jumbo'>
        <div className='overlay'></div>
        <Container>
          <h1>Welcome</h1>
          <p>Learn to Code in React</p>
        </Container>
      </Jumbo>
    </Styles>
  )
}