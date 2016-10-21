import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js'
import {Provider} from 'react-redux'
import Store from './components/store'


const App = () => (
      <Provider store={Store}>
       	 <Search />
      </Provider>
)

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
 		 <App />,
 		 document.getElementById('root')
	);
});
