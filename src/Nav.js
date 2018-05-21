import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to='/'>All</Link></li>
						<li><Link to='/active'>Active</Link></li>
						<li><Link to='/completed'>Completed</Link></li>
					</ul>
                </nav>
                {this.props.checkCompleted() && (
                    <li>Hello</li>
                )}
			</div>
		);
	}
}

export default Nav;