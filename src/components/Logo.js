import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

const Logos = styled.h1`
  flex-grow: 0;
	max-width: 200px;
`

const Logo = () => {
  return (
    <div>
      <Logos>
        <Link to='/'>
        <img src="/logo-sm.png" alt="logo"  />
        </Link>
			</Logos>
    </div>
  );
}

export default Logo;
