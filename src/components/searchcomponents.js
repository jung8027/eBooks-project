import {fromJS} from 'immutable'
import fetch from 'isomorphic-fetch'
import {APIkey} from './APIkey'

export const getBooks = (query) => {
	console.log(query)
	return (dispatch, getState)=>{
		store.dispatch(setQuery(query))
		(query) ? fetch ('https://www.googleapis.com/books/v1/volumes?q='+query+ '&filter=free-ebooks&maxResults=20&key=' +APIkey)
		.then(response =>{
			if(response.status >=400){
				throw new Error ('Bad response from the server')
			}
			return response.json()
		}).then(books=> {
			store.dispatch(setBooks(books.items))
		}).catch(error =>{
			console.log(error)
		}) : store.dispatch(setBooks([]))
	}
}
export const action = {
	getBooks
}
