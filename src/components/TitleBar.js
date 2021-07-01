import React from 'react';
import styled, { css } from 'styled-components'
import { font, color } from '../styled/index'

const Logo = styled.h1`
	font-size: 1rem;
	padding: 1.5em;
	text-align: center;
	.img-wrap {
		margin: auto;
		max-width: 180px;
		margin-bottom: 1em;
	}
	.title-wrap {
		font-size: 1.25em;
		color: ${color.danger};
    font-family: ${font.noto};
	}
`

const TitleBar = () => {
  return (
    <div>
      <Logo>
				<div className="img-wrap">
					<img src="/logo.png" alt="logo" className="w-100" />
				</div>
			</Logo>
    </div>
  );
}

export default TitleBar;
