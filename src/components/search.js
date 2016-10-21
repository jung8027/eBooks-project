import React, {PropTypes} from 'react'
import '../index.css'
//import getBooks from './searchcomponents'

export const Search = (props) => {
	const{ getBooks, books, query} = props
	const mappedBooks = (books) ? books.map((book, index)=> {
		const id = books.get('id')
		const title = booke.getIn(['volumeInfo', 'title'])
		const authors = books.getIn(['volumeInfo', 'authors'])
		const pubDate = book.getIn(['volumeInfo', 'publishedDate'])
		const image = book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])
		const link = book.getIn (['volumeInfo', 'webReaderLink'])
		const mappedAuthors = authors ? authors.map((author, i)=>{
			return <span key={i}>{author}</span>
		}): null

		return(
			<div key={index} className='well well-sm'>
				<div className='row'>
					<div className='col-md-4'>
						<a href={link}><img src={image} alt={title} /></a>
					</div>
					<div className='col-md-8'>
						<h2 className={classes.title}>{title}</h2>
						<div>{mappedAuthors}</div>
						<div>{pubDate}</div>
						<div className={text-center+' '+classes.favortie}>
							<button type='button' className='btn btn-primary'>Favorite</button>
						</div>
					</div>
				</div>
			</div>
		)
	}): <h4>No books found</h4>
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
						<input type='text' className='form-control' id='search' placeholder='Search for a book' value={query} onChange={({target}) => getBooks(target.value)}/>
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