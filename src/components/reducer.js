import {fromJS} from 'immutable'
import ACTION_HANDLERS from './actionHandlers'

const initialState = fromJS({})

const reducer = (state = initialState, action)=>{
	const handler = ACTION_HANDLERS[action.type]
	return handler ? handler(state, action) : state
}
export default reducer