import { createSlice } from '@reduxjs/toolkit'

const name = 'search'

const initialState = {		// 검색해서 받아올 상태와 값의 초기설정
	isQuering: false,
	query: '',
	is_end: false,
	pageable_count: 568,
	total_count: 6990204
}

const reducers = {
	actQuery(state, {payload}){
		state.query = payload
	}
}

const extraReducers = bulider => bulider
.addCase()
.addCase()
.addCase()


const webReducers = createSlice({ name, initialState, reducers, extraReducers })
export default webReducers