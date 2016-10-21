var React = require('react');
var ReactDOM = require('react-dom');
import Search from './components/search.js'


const App = () => (
      <div>
        <Search/>
      </div>
)

document.addEventListener("DOMContentLoaded", () => {
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
});
