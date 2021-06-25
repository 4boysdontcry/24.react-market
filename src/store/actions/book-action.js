import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getBookAction = createAsyncThunk('book/getBookAction', async (payload, thunk) => {
	try {
		return await getSearchApi(payload, 'Book_URL')
	}
	catch(err) {
		throw err
	}
})

export { getBookAction }