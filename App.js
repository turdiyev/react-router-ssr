import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to={'/'}>Homepage</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>
				</ul>
			</div>
		);
	}
}
class Homepage extends Component {
	render() {
		return (
			<div>
                <Menu></Menu>
				<h1>Homepage</h1>
			</div>
		);
	}
}

class About extends Component {
	render() {
		return (
			<div>
                 <Menu></Menu>
				<h1>About</h1>
			</div>
		);
	}
}

class Contact extends Component {
	render() {
		return (
			<div>
                 <Menu></Menu>
				<h1>Contact</h1>
			</div>
		);
	}
}


export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={ Homepage } />
					<Route path="/about" component={ About } />
					<Route path="/contact" component={ Contact } />
				</Switch>
			</div>
		);
	}
}