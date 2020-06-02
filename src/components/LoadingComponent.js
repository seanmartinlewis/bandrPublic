import React, { Component } from 'react';
import { connect } from 'react-redux';
//with router you can get access to the historys objects property
import {withRouter} from 'react-router-dom'
import {getUser} from '../actions/userAction';
import {getSongs} from '../actions/songsAction';

class LoadingComponent extends Component {
	componentWillMount() {
		const {userLoading, songsLoading} = this.props;
		// if we haven't tried to load the user, load usre
		if (userLoading === undefined) {
			this.props.getUser();
		}
		// if we haven't tried to load the songs, load usre
		if (songsLoading === undefined) {
			this.props.getSongs();
		}
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.songsLoading === -1 && nextProps.user !== null) {
			this.props.getSongs();
		}
	}

	render() {
		const {userLoading, songsLoading, children} = this.props;
		if ((!userLoading && !songsLoading) || this.props.user == null) {
			return <div>{children}</div>
		} else {
			return (
				<h4>....loading</h4>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		userLoading: state.loading.user,
		songsLoading: state.loading.songs,
	}
}

export default withRouter(connect(mapStateToProps, {getUser, getSongs})(LoadingComponent));
