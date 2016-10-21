import {connect} from 'react-dom'
import {getBooks} from './searchcomponents'
import {fromJS} from 'immutable'
import Search from './search'

const actions = {
	getBooks: (value) => getBooks(value)
}

const mapStateToProps = (state) => {
	const search = state.search
	return {
		books: search.get('books', fromJS([])),
		query: search.get('query', '')
	}
}

export default connect(mapStateToProps, actions)(Search)