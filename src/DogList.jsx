import React, {Component} from 'react';
import {connector} from './redux/dogStore';
import Dog from './Dog';

class DogList extends Component {
	componentWillMount() {
		fetch('http://barkwire-api.herokuapp.com/dogs')
		.then(res => res.json())
		.then(res => this.props.resetDogs(res.dogs))
		.catch(err => console.error(err));
	}

	generateDogs() {
		return this.props.dogs.map(dog => (<Dog key={dog.id} dog={dog} />));
	}

	render() {
		return (
			<ul className={"dogs"}>
				{this.generateDogs()}
			</ul>
		);
	}
}

export default connector(DogList);
