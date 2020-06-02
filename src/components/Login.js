import React, { Component } from 'react';
import { connect } from 'react-redux';
import {googleLogin, twitterLogin } from '../actions/userAction';

class Login extends Component {
	render() {
		return(
			<div className="container-fluid">
				<div className="row text-center">
					<div className="col-sm-12 jumbotron">
						<h1>
							Login with your favourite <b>Social Network</b>
						</h1>
					</div>
					<div className="col-sm-6">
						<button onClick={this.props.googleLogin} className="btn btn-danger btn-lg">Login with Google</button>
					</div>
					<br/>
					<div className="col-sm-6">
						<button onClick={this.props.twitterLogin} className="btn btn-success btn-lg">Login with Twitter</button>
					</div>
				</div>
			</div>
		)
	}
}



export default connect(null, {googleLogin, twitterLogin })(Login);
