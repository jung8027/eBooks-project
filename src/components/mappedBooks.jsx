import React from 'react';
import { getBooks, books, query} from './search'

export	const mappedBooks = (books) ? books.map((book, index)=> {
		const id = books.get('id')
		const title = books.getIn(['volumeInfo', 'title'])
		const authors = books.getIn(['volumeInfo', 'authors'])
		const pubDate = books.getIn(['volumeInfo', 'publishedDate'])
		const image = books.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])
		const link = books.getIn (['volumeInfo', 'webReaderLink'])
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
						<div className={'test classes.favorite'}>
							<button type='button' className='btn btn-primary'>Favorite</button>
						</div>
					</div>
				</div>
			</div>
		)
	}): <h4>No books found</h4>

export default mappedBooks