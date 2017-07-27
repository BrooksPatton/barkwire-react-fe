import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dog extends Component {
	render() {
		return (
			<li>
				<Link to={`/dogs/${this.props.dog.id}`}>
					<section className={"dog-listing"}>
						<h3 className={"name"}>{this.props.dog.name}</h3>
						<section>
							<figure>
								<img src={this.props.dog.imageUrl} alt={this.props.dog.name} />
								<figcaption>{this.props.dog.imageCaption}</figcaption>
							</figure>
							<p>{this.props.dog.description}</p>
						</section>
					</section>
				</Link>
			</li>
		);
	}
}

export default Dog;
