import React from 'react'
import { Link } from 'gatsby'
import HImage from './../images/header.png'
import styled from 'styled-components';
import Img from './image';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  height:
  h1 {
    img {
      height: 90px;
    }
  }`
  const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
 ` 
//  const Billboard = styled(Img)`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//  ` 
const Header = ({ title }) => (
  <HeaderWrapper
  >
    <HeaderContainer>
      <h1>
        <img src={HImage} style={{width: '200px'}} alt="Header Image"/>
      </h1>
      <span>{title}</span>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      
    </HeaderContainer>
    <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'red'
      }}>
        <Img/>
      </div>
  </HeaderWrapper>
)

export default Header
