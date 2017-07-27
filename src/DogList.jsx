import React, {Component} from 'react';
import {connector} from './redux/dogStore';

class DogList extends Component {
	componentWillMount() {
		fetch('http://barkwire-api.herokuapp.com/dogs')
		.then(res => res.json())
		.then(res => this.props.resetDogs(res.dogs))
		.catch(err => console.error(err));
	}

	render() {
		return (
			<h1>Hello world</h1>
		);
	}
}

export default connector(DogList);
