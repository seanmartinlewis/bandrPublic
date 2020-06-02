import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class Header extends Component {
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/">bandbox</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
						{
							this.props.user === null ? (
								<li>
									<a href="/login">login</a>
								</li>
							) : (
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
										{this.props.user.displayName}
										&nbsp;<span className="caret"></span>
									</a>
									<ul className="dropdown-menu">
										<li>
											<a onClick={() => this.props.logout()} href="/" >logout</a>
										</li>
									</ul>
								</li>
							)
						}

						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state, ownProps){
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {getUser, logout})(Header);
