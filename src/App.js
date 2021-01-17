import React from 'react';
import test from './Test';

export default class App extends React.Component {
	componentDidMount() {
		test();
	}

	render() {
		return <h1>Hello World from React boilerplate</h1>;
	}
}
