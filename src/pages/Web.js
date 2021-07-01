import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actQuery, getWebData } from '../store/reducers/webReducer'
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import WebList from '../components/WebList'



const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const WebWrapper = styled(ListWrapper)``
const Header = styled.div`
  display: flex;
  align-items: center;
`

const Web = () => {
  const dispatch = useDispatch()
	const query = useSelector(state => state.data.query)
	const webList = useSelector(state => state.web.lists)
  
  useEffect(() => {
    dispatch(getWebData(query, 50))
    return () => {
      dispatch(actQuery(''))
    }
  }, [dispatch, query]);

  return (
		<div>
			<Header>
			  <Logo />
  			<Search />
			</Header>
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="website" link="/web" />
						<WebWrapper>
							{ webList.map(v => <WebList data={ v } key={ uuid() }/>) }
						</WebWrapper>
					</div> : ''
			}
		</div>
	)
}

export default Web