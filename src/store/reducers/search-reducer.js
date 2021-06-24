import { createSlice } from '@reduxjs/toolkit'

const name = 'search'

const initialState = {		// 검색해서 받아올 상태와 값의 초기설정
	isQuering: false,
	query: '',
	web: {
		documents: [],
		meta: {}
	},
}

const reducers = {
	
}

const extraReducers = {

}


const searchReducers = createSlice({ name, initialState, reducers, extraReducers })
export default searchReducers