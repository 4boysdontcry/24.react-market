import React from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

import Title from './list/Title'
import Content from './list/Content'
import Time from './list/Time'


const List = styled.a`
	margin: 1em 0;
  display: block;
  font-family: ${ font.noto };
`
const Titles = styled.div`
  margin-bottom: .75em;
`
const Contents = styled.div`
  margin-bottom: .75em;
  line-height: 1.25em !important;
  font-weight: 300;
`
const Information = styled.div`
`


const WebList = ({ data }) => {
	return (
		<List href={ data.url } target="blank">
			<Titles>
        <Title size="1.25em" value={ data.title } />
      </Titles>
			<Contents>
        <Content color={ color.dark } hoverColor={ color.primary } value={ data.contents } />
      </Contents>
      <Information>
        <Time color={ color.grey } value={ data.contents } size="0.875em" /> | 
      </Information>
		</List>
	);
}

export default WebList;
