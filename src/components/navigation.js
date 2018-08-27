import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from "reactjs-popup";

export default class Navigation extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
				<div className="container">
				  <h4 className="navbar-brand">Logo</h4>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <NavLink className="nav-link" to="/">Books <span className="sr-only">(current)</span></NavLink>
				      </li>
				      <li className="nav-item active">
				        <NavLink className="nav-link" to="/albums">Albums <span className="sr-only">(current)</span></NavLink>
				      </li>
				    </ul>  
				    <ul className="navbar-nav ml-auto">  
				      <li className="mx-5">
				      	<Popup
						    trigger={<button className="button btn btn-primary"> Add Item </button>}
						    modal
						    closeOnDocumentClick
						  >
						    <span> 
						    	<form>
						    		<div className="form-row">
							    		<div className="form-group col-md-6">
								    		<label>Product</label>
											<input type="text" className="form-control"  placeholder="Books,Albums ,..."/>
										</div>
										<div className="form-group col-md-6">
									      	<label>Name</label>
									     	 <input type="text" className="form-control"  placeholder="Name" />
									    </div>
									</div>
									<div className="form-group">
									    <label>Price</label>
									    <input type="number" className="form-control" placeholder="Price" />
									</div>
									<div className="form-group">
									    <label>Category</label>
									    <input type="text" className="form-control" placeholder="Category" />
									</div>
									<div className="form-row">
									    <div className="form-group col-md-6">
									      	<label>Image</label>
									      	<input type="file" className="form-control" />
									    </div>  
									</div>
									<div className="row"> 
										<button type="button" className="btn btn-secondary mx-3">Close</button>
						        		<button type="button" className="btn btn-primary mx-3">Save changes</button>
					        		</div>	
								</form>
							</span>
						  </Popup>
				      </li>
				    </ul>
				  </div>
			  	</div>
			</nav>
			)
	}
}