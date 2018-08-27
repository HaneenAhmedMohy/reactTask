import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import AlbumReducer from './reducer_album';

const rootReducer=combineReducers({
	books:BooksReducer,
	albums:AlbumReducer,
});

export default rootReducer;