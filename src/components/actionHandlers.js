import { SET_BOOKS, SET_QUERY} from './actions'
import {fromJS} from 'immutable'

const ACTION_HANDLERS = {
	[SET_BOOKS]: (state, {payload: books})=> {
		return state.set('books', fromJS(books))
	},
	[SET_QUERY]: (state,{payload: query})=> {
		return state.set('query', fromJS(query))
	}
}

export default ACTION_HANDLERS