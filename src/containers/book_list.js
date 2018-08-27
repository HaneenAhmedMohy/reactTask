import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

class BookList extends Component{
	constructor(props){
		super(props);

		this.state={
			searchTerm:"",
			currentDisplayed:this.props.books
		}

		this.onInputChange=this.onInputChange.bind(this);
	}

	onInputChange(e){
		let newDisplayed=_.filter(this.props.books,book=>book.name.includes(e.target.value));
		this.setState({
			searchTerm:e.target.value,
			currentDisplayed:newDisplayed
		})
	}
	renderList(){
		return this.state.currentDisplayed.map((book)=>{
			return(
				<div className="col-lg-3 mb-5" key={book.name}>
					<div className="card">
						<img className="card-img-top mb-2" src={book.picture} alt={book.name}/>
						  <div className="card-body">
						    <h5 className="card-title">Book Name : {book.name}</h5>
						    <p className="card-text">Category : {book.category}</p>
						    <p className="card-text">Price : {book.price}</p>
						  </div>
					</div>
				</div>
				)
		})
	}
	render(){
		return(
			<div className="container">
				<div className="row mb-3">
					<h1>Books</h1>	
				</div>
				<div className="row mb-3">
				      <input className="form-control mr-sm-2 col-lg-3" 
				      		 onChange={this.onInputChange} type="search"
				      		 placeholder="Search" aria-label="Search" 
				      />
				</div>
				<div className="row">
					{this.renderList()}	
				</div>
			</div>
			)
	}
}


function mapStateToProps(state){
	return{
		books:state.books
	}
}



export default connect (mapStateToProps)(BookList);