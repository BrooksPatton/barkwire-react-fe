import React, {Component} from 'react';
import {connector} from './redux/dogStore';
import Dog from './Dog';

class OneDog extends Component {
	generateDog() {
		const id = Number(this.props.match.params.id)
		const dog = this.getDogFromStore(id);

		if(!dog) {
			this.getDogFromApi(id);
			return "Fetching dog";
		} else {
			return (<Dog dog={dog} />);
		}
	}

	getDogFromStore(id) {
		const dogs = this.props.dogs.filter(dog => dog.id === id);

		return dogs[0];
	}

	getDogFromApi(id) {
		fetch(`https://barkwire-api.herokuapp.com/dogs/${id}`)
		.then(res => res.json())
		.then(res => this.props.addOneDog(res.dog))
		.catch(err => console.error(err));
	}

	render() {
		return (
			<ul className={"dogs"}>
				{this.generateDog()}
			</ul>
		)
	}
}

export default connector(OneDog);
