import React, {PropTypes} from 'react'
import '../index.css'
import mappedBooks from './mappedBooks'

export const Search = (props) => {
	const { getBooks, books, query} = props
	return (
		<div className="test">
			<section className='container-fluid'>
				<div className='row'>
					<div className='col-md-12'>
						<h1>Free eBooks Library API</h1>
					</div>
				</div>
			<div className='row'>
				<div className='col-md-4'>
					My favorites books lists
				</div>
				<div className='col-md-8'>
					<div className='form-group'>
						<input type='text' className='form-control' id='search' placeholder='Search for a book' value={query} onChange={({target})=>getbooks(target.value)}/>
					</div> 
					<div>
						{mappedBooks}
					</div>
				</div>
			</div>
		</section>
	</div>
	)
}

Search.propTypes = {
	getBooks: PropTypes.func,
	books: PropTypes.any,
	query: PropTypes.string,
}

export default Search