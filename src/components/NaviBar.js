import React from 'react';
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { font, color, media, flex } from '../styled/index'

const NaviWrap = styled.div`
  ${ flex }
  justify-content: center;
`

const Navi  = styled(Link)`
  
`


const NaviBar = () => {
  return (
    <NaviWrap>
      <Navi to='/web'>Website</Navi>
      <Navi to='/img'>Image</Navi>
      <Navi to='/clip'>Movie clip</Navi>
      <Navi to='/blog'>Blog</Navi>
      <Navi to='/book'>Book</Navi>
    </NaviWrap>
  );
}

export default NaviBar;
