import React, { Component } from 'react';
import './App.css';
import BookList from './containers/book_list';
import AlbumList from './containers/album_list';
import Navigation from './components/navigation';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
    			<Navigation />
	    		<Switch>
	    			<Route path="/" component={BookList} exact/>
	    			<Route path="/albums" component={AlbumList}/>
	    		</Switch>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default App;
