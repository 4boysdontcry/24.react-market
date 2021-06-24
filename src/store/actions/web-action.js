import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis/index';

const getwebAction = createAsyncThunk('web/getWebAction', async (payload, thunk) => {
	try{
		const r = await getSearchApi(payload, 'web')
	}
	catch(err){
		throw err
	}
})

export default getwebAction