import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			url: '',
			description: '',
			songs: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderSongs = this.renderSongs.bind(this);
	}

	//lifecycle
	componentDidMount() {
		database.on('value', (snapshot) => {
			console.log('SNAPSHOT', snapshot.val());
			this.setState({
				songs: snapshot.val()
			});
		})
	}

	//handle submit
	handleSubmit(e) {
		console.log(this.state);
		e.preventDefault()
		const song = {
			title: this.state.title,
			url: this.state.url,
			description: this.state.description,
		}
		database.push(song);
		this.setState({
			title: '',
			url: '',
			description: ''
		})
	}

	//change handler
	handleChange(e) {
		e.persist();
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	//render posts
	renderSongs() {
		return _.map(this.state.songs, (song, key) => {
			return (
				<div key={key}>
					<h2>{song.title}</h2>
					<h4>{song.url}</h4>
					<p>{song.description}</p>
				</div>
			)
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<input
									onChange={this.handleChange}
									value={this.state.title}
									type="text" name="title" className="form-control no-border" placeholder="Title..." required/>
							</div>
							<div className="form-group">
								<input
									onChange={this.handleChange}
									value={this.state.url}
									type="text" name="url" className="form-control no-border" placeholder="Url..." required/>
							</div>
							<div className="form-group">
								<textarea
									onChange={this.handleChange}
									value={this.state.description}
									type="text" name="description" className="form-control no-border" placeholder="Description..." required/>
							</div>
							<div className="form-group">
								<button className="btn btn-primary col-sm-12">Save</button>
							</div>
						</form>
						{this.renderSongs()}
					</div>
				</div>
			</div>
		);
	}

}

export default App;
