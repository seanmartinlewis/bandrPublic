import React from 'react';

const SongCard = (props) => (
	<div className="jumbotron">
		<div>{ props.children }</div>
	</div>
);

export default SongCard;
