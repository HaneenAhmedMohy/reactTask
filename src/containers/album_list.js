import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

class AlbumList extends Component{
	constructor(props){
		super(props);

		this.state={
			searchTerm:"",
			currentDisplayed:this.props.albums
		}

		this.onInputChange=this.onInputChange.bind(this);
	}
	onInputChange(e){
		let newDisplayed=_.filter(this.props.albums,album=>album.name.includes(e.target.value));
		this.setState({
			searchTerm:e.target.value,
			currentDisplayed:newDisplayed
		})
	}
	renderList(){
		return this.state.currentDisplayed.map((album)=>{
			return(
				<div className="col-lg-3" key={album.name}>
					<div className="card">
						<img className="card-img-top mb-2" src={album.picture} alt={album.name}/>
						  <div className="card-body">
						    <h5 className="card-title">Album Name : {album.name}</h5>
						    <p className="card-text">Category : {album.category}</p>
						    <p className="card-text">Price : {album.price}</p>
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
					<h1>Albums</h1>	
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
		albums:state.albums
	}
}



export default connect (mapStateToProps)(AlbumList);